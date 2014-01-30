<?php

/**
 * Videos plugin for Craft CMS
 *
 * @package   Videos
 * @author    Benjamin David
 * @copyright Copyright (c) 2014, Dukt
 * @link      https://dukt.net/craft/videos/
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace Craft;

require(CRAFT_PLUGINS_PATH.'videos/vendor/autoload.php');

class Videos_VideoFieldType extends BaseFieldType
{
	public function getName()
	{
		return Craft::t('Videos');
	}

	/**
	 * Save it
	 */
	public function defineContentAttribute()
	{
		return AttributeType::String;
	}

	protected function defineSettings()
    {
        return array(
            'mode' => array(AttributeType::Enum, 'required' => true, 'values' => array('url', 'manager'), 'default' => 'url'),
        );
    }

    public function getSettingsHtml()
    {
        return craft()->templates->render('videos/field/settings', array(
            'settings' => $this->getSettings()
        ));
    }

	/**
	 * Show field
	 */
	public function getInputHtml($name, $value)
	{
	    // Reformat the input name into something that looks more like an ID

	    $id = craft()->templates->formatInputId($name);


	    // Figure out what that ID is going to look like once it has been namespaced

	    $namespacedId = craft()->templates->namespaceInputId($id);

	    $settings = $this->getSettings();


	    // Resources

		craft()->templates->includeCssResource('videos/css/field.css');

		craft()->templates->includeJsResource('videos/js/knockout-3.0.0.js');
		craft()->templates->includeJsResource('videos/js/dukt.js');
		craft()->templates->includeJsResource('videos/js/field.js');
		craft()->templates->includeJsResource('videos/js/manager.js');
		craft()->templates->includeJsResource('videos/js/manager.ko.js');

		craft()->templates->includeJs('new VideoField("'.craft()->templates->namespaceInputId($id).'");');


		$preview = craft()->templates->render('videos/field/preview', array('video' => $value));


	    // Set video url as value

		if(is_object($value)) {
			$value = $value->url;
		}

	    // Render HTML

		return craft()->templates->render('videos/field/'.$settings['mode'], array(
			'id'    => $id,
			'name'  => $name,
			'value' => $value,
			'preview' => $preview
		));
	}

	/**
	 * Prep value
	 */
	public function prepValue($videoUrl)
	{
		$video = craft()->videos->getVideoByUrl($videoUrl);

		return $video;
	}

	/**
	 * Search Keywords
	 */
	public function getSearchKeywords($value)
	{
		return '';
	}
}
