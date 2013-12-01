
/**
 * EE Videos by Dukt
 *
 * @package   EE Videos
 * @author    Benjamin David
 * @copyright Copyright (c) 2013, Dukt
 * @license   http://docs.dukt.net/ee/videos/license
 * @link      http://dukt.net/ee/videos
 */

DuktVideosCms = {
    getActionUrl: function(method, options) {
        url = Dukt_videos.endpointUrl+'?method='+method+'&'+http_build_query(options);

        // videosApp.log('action url' + url);

        return url;
    },
    getResourceUrl: function(url)
    {
        url = Dukt_videos.resourceUrl + url;

        return url;
    },
    postActionRequest: function(method, options, callback)
    {
        url = DuktVideosCms.getActionUrl(method);

        $.ajax({
          url : url,
          type : 'POST',
          data : options,
          complete: function(xhr) {
            response = xhr.responseText;

            try {
               response = $.parseJSON(response);
               callback(response);
            } catch(e) {
               callback(response);
            }
          }
        })
    }
};