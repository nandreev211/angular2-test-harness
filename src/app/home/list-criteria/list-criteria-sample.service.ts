import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ListCriteriaSampleService {
  sampleData = {
    "data": {
      "type": "List",
      "attributes": {
        "listCriteria": {
          "datasetCode": "CONSUMER",
          "qtyDesired": 2500,
          "countId": "wer3-te32",
          "listOutputColumns": [
            {
              "outputColumnName": "name_prefix",
              "outputColumnID": "name_prefix"
            },
            {
              "outputColumnName": "first_name",
              "outputColumnID": "first_name"
            },
            {
              "outputColumnName": "middle_name",
              "outputColumnID": "middle_name"
            },
            {
              "outputColumnName": "surname",
              "outputColumnID": "surname"
            },
            {
              "outputColumnName": "name_suffix",
              "outputColumnID": "name_suffix"
            },
            {
              "outputColumnName": "primary_address",
              "outputColumnID": "primary_address"
            },
            {
              "outputColumnName": "secondary_address",
              "outputColumnID": "secondary_address"
            },
            {
              "outputColumnName": "street_number",
              "outputColumnID": "street_number"
            },
            {
              "outputColumnName": "streetPreDirectional",
              "outputColumnID": "streetPreDirectional"
            },
            {
              "outputColumnName": "street_name",
              "outputColumnID": "street_name"
            },
            {
              "outputColumnName": "street_suffix",
              "outputColumnID": "street_suffix"
            },
            {
              "outputColumnName": "street_post_directional",
              "outputColumnID": "street_post_directional"
            },
            {
              "outputColumnName": "unit_designator",
              "outputColumnID": "unit_designator"
            },
            {
              "outputColumnName": "unit_number",
              "outputColumnID": "unit_number"
            },
            {
              "outputColumnName": "city_name",
              "outputColumnID": "city_name"
            },
            {
              "outputColumnName": "state_abbreviation",
              "outputColumnID": "state_abbreviation"
            },
            {
              "outputColumnName": "zip_code",
              "outputColumnID": "zip_code"
            },
            {
              "outputColumnName": "zip4_code",
              "outputColumnID": "zip4_code"
            },
            {
              "outputColumnName": "carrier_route",
              "outputColumnID": "carrier_route"
            },
            {
              "outputColumnName": "delivery_point_barcode",
              "outputColumnID": "delivery_point_barcode"
            },
            {
              "outputColumnName": "fips_state_code",
              "outputColumnID": "fips_state_code"
            },
            {
              "outputColumnName": "fips_county_code",
              "outputColumnID": "fips_county_code"
            },
            {
              "outputColumnName": "block_tract",
              "outputColumnID": "block_tract"
            },
            {
              "outputColumnName": "county_name",
              "outputColumnID": "county_name"
            },
            {
              "outputColumnName": "recipient_reliability_code",
              "outputColumnID": "recipient_reliability_code"
            },
            {
              "outputColumnName": "dwelling_type",
              "outputColumnID": "dwelling_type"
            },
            {
              "outputColumnName": "ncoa_move_update_code",
              "outputColumnID": "ncoa_move_update_code"
            },
            {
              "outputColumnName": "ncoa_move_update_date",
              "outputColumnID": "ncoa_move_update_date"
            }
          ],
          "listOutputFormat": {
            "dataUsage": "oneTime",
            "fileCompressionType": "zip",
            "letterCaseType": "upper",
            "fileFormat": "csv",
            "anonymizedData": false,
            "applySeeding": false
          },
          "listSeeding": [
            {}
          ],
          "randomSeed": 0.5
        },
        "tags": {
          "name": "MyList#1"
        }
      }
    }
  }
  constructor(public http: Http) {
  }

  getData() {
    console.log('ListCriteriaSample#getData(): Get Data');
    // return this.http.get('/assets/data.json')
    // .map(res => res.json());
    return this.sampleData;
  }

}
