<?php
/*
Plugin Name: JSON Formatter
Description: Transforms JSON data.
*/

function format_json_data() {
    $jsonData = '[
        {
            "id": 1,
            "attributes": {
                "level": 1
            }
        },
        {
            "id": 2,
            "attributes": {
                "level": 2
            }
        },
        {
            "id": 3,
            "attributes": {
                "level": 3
            }
        },
        {
            "id": 4,
            "attributes": {
                "level": 2
            }
        },
        {
            "id": 5,
            "attributes": {
                "level": 1
            }
        },
        {
            "id": 6,
            "attributes": {
                "level": 2
            }
        },
        {
            "id": 7,
            "attributes": {
                "level": 3
            }
        }
    ]';

    $jsonDecode = json_decode($jsonData, true);

    function formatter($data) {
      if (empty($data)) {
          return null;
      }

      return $data;
    }

    $formattedData = formatter($jsonDecode);

    return json_encode($formattedData, JSON_PRETTY_PRINT);
}

add_shortcode('display_transformed_json', 'format_json_data');

// Display it with echo do_shortcode('[display_transformed_json]')