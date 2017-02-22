<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2017, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace dukt\videos\models;

use craft\base\Model;

/**
 * Section model class.
 *
 * @author Dukt <support@dukt.net>
 * @since  2.0
 */
class Section extends Model
{
    // Properties
    // =========================================================================

    public $name;
    public $collections;

    // Protected Methods
    // =========================================================================

    protected function defineAttributes()
    {
        return array(
            'name' => AttributeType::String,
            'collections' => AttributeType::Mixed,
        );
    }
}