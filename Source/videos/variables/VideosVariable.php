<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2015, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace Craft;

class VideosVariable
{
    // Public Methods
    // =========================================================================

    /**
     * Get Embed
     */
    public function getEmbed($videoUrl, $options = array())
    {
        return $this->getEmbedHtml($videoUrl, $options);
    }

    /**
     * Get a video from its URL
     */
    public function getVideoByUrl($videoUrl, $enableCache = true, $cacheExpiry = 3600)
    {
        try
        {
            return craft()->videos->getVideoByUrl($videoUrl, $enableCache, $cacheExpiry);
        }
        catch(\Exception $e)
        {
            VideosHelper::log('Couldn’t get video from its url ('.$videoUrl.'): '.$e->getMessage(), LogLevel::Error);
        }
    }

    /**
     * Alias for getVideoByUrl()
     */
    public function url($videoUrl, $enableCache = true, $cacheExpiry = 3600)
    {
        $this->getVideoByUrl($videoUrl, $enableCache, $cacheExpiry);
    }
}
