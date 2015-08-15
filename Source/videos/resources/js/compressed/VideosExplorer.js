"undefined"==typeof Videos&&(Videos={}),Videos.Explorer=Garnish.Base.extend({playerModal:null,previewInject:null,searchTimeout:null,init:function(e,t){this.settings=t,this.$container=e,this.$spinner=$(".spinner",this.$container),this.$gateways=$(".gateways select",this.$container),this.$sectionLinks=$("nav a",this.$container),this.$search=$(".search",this.$container),this.$mainContent=$(".main .content",this.$container),this.$videos=$(".videos",this.$container),this.addListener(this.$sectionLinks,"click",$.proxy(function(e){this.$sectionLinks.filter(".sel").removeClass("sel"),$(e.currentTarget).addClass("sel"),gateway=$(e.currentTarget).data("gateway"),method=$(e.currentTarget).data("method"),options=$(e.currentTarget).data("options"),this.getVideos(gateway,method,options),e.preventDefault()},this)),this.addListener(this.$search,"textchange",$.proxy(function(e){this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout($.proxy(this,"search",e),500)},this)),this.addListener(this.$search,"blur",$.proxy(function(e){var t=$(e.currentTarget).val();0==t.length&&this.$sectionLinks.filter(".sel").trigger("click")},this)),this.addListener(this.$search,"keypress",function(e){e.keyCode==Garnish.RETURN_KEY&&(e.preventDefault(),this.search(e))}),$("nav div:not(.hidden) a:first",this.$container).trigger("click")},search:function(e){q=$(e.currentTarget).val(),q.length>0?(gateway=this.$gateways.val(),method="search",options={q:q},this.getVideos(gateway,method,options)):this.$videos.html("")},playVideo:function(e){var t=$(e.currentTarget).data("gateway"),i=$(e.currentTarget).data("id");this.playerModal?(this.playerModal.play({gateway:t,videoId:i}),this.playerModal.show()):this.playerModal=new Videos.Player({gateway:t,videoId:i,onHide:$.proxy(function(){this.settings.onPlayerHide()},this)})},selectVideo:function(e){this.$videoElements.removeClass("sel"),$(e.currentTarget).addClass("sel"),url=$(e.currentTarget).data("url"),this.settings.onSelectVideo(url)},getVideos:function(e,t,i){data={gateway:e,method:t,options:i},this.$spinner.removeClass("hidden"),Craft.postActionRequest("videos/getVideos",data,$.proxy(function(s,n){if(this.deselectVideos(),this.$spinner.addClass("hidden"),this.$videos.html(""),"success"==n)if(s.error)this.$mainContent.html('<p class="error">'+s.error+"</p>");else if($(".error",this.$mainContent).remove(),this.$videos=$('<div class="videos" />'),this.$videos.html(s.html),this.$mainContent.append(this.$videos),this.$playBtns=$(".play",this.$videos),this.$videoElements=$(".video",this.$videos),this.addListener(this.$playBtns,"click","playVideo"),this.addListener(this.$videoElements,"click","selectVideo"),s.more){if($moreBtn=$('<a class="more btn">More</a>'),this.$videos.append($moreBtn),"undefined"==typeof i)var o={};else var o=i;o.moreToken=s.moreToken,this.addListener($moreBtn,"click",$.proxy(function(){this.loadMore(e,t,o)},this))}$(".main",this.$container).animate({scrollTop:0},0)},this))},loadMore:function(e,t,i){$(".more",this.$videos).remove(),this.$spinner.removeClass("hidden"),$videosSpinner=$('<div class="spinner" />'),this.$videos.append($videosSpinner),data={gateway:e,method:t,options:i},Craft.postActionRequest("videos/getVideos",data,$.proxy(function(s,n){if(this.deselectVideos(),this.$spinner.addClass("hidden"),$videosSpinner.remove(),"success"==n)if("undefined"==typeof s.error){if(this.$videos.append(s.html),this.$playBtns=$(".play",this.$videos),this.$videoElements=$(".video",this.$videos),this.addListener(this.$playBtns,"click","playVideo"),this.addListener(this.$videoElements,"click","selectVideo"),s.more){if($moreBtn=$('<a class="more btn">More</a>'),this.$videos.append($moreBtn),"undefined"==typeof i)var o={};else var o=i;o.moreToken=s.moreToken,this.addListener($moreBtn,"click",$.proxy(function(){this.loadMore(e,t,i)},this))}}else this.$videos.html('<p class="error">'+s.error+"</p>")},this))},deselectVideos:function(){this.$videoElements&&(currentVideo=this.$videoElements.filter(".sel"),currentVideo.removeClass(".sel"),this.settings.onDeselectVideo())}});