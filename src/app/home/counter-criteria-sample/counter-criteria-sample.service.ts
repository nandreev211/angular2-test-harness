import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CounterCriteriaSampleService {
  sampleData = {
    "simple": {
      "data": {
        "type": "counts",
        "attributes": {
          "criteria": {
            "datasetCode": "CONSUMER",
            "geoCriteria": {
              "criterionCode": "geoCriteria",
              "binaryOperator": "OR",
              "children": [
                {
                  "criterionCode": "CBSA",
                  "values": ["14460",
                  "28420"]
                },
                {
                  "criterionCode": "zipCode",
                  "values": ["90210",
                  "90300-90400"]
                }
              ]
            },
            "demoCriteria": {
              "criterionCode": "demoCriteria",
              "binaryOperator": "AND",
              "children": [
                {
                  "criterionCode": "dwellingType",
                  "values": [
                    "S",
                    "A",
                    "P"
                  ]
                },
                {
                  "criterionCode": "recipientReliabilityCode",
                  "values": ["1",
                  "2"]
                },
                {
                  "criterionCode": "onePerLivingUnit",
                  "values": ["1"]
                }
              ]
            }
          }
        }
      }
    },
    "all_geo": {
      "data": {
        "type": "counts",
        "attributes": {
          "criteria": {
            "datasetCode": "CONSUMER",
            "geoCriteria": {
              "criterionCode": "geoCriteria",
              "binaryOperator": "OR",
              "children": [
                {
                  "criterionCode": "zipCode",
                  "values": [
                    "90210",
                    "90215",
                    "10102",
                    "90300-90400",
                    "10100-10200"
                  ],
                  "omitValues": ["90345"]
                },
                {
                  "criterionCode": "state",
                  "values": [
                    "AZ",
                    "NY"
                  ]
                },
                {
                  "criterionCode": "city",
                  "values": [
                    "AZ:Scottdale",
                    "NY:New York"
                  ]
                },
                {
                  "criterionCode": "zip4",
                  "values": ["Y"]
                },
                {
                  "criterionCode": "radius",
                  "values": [
                    {
                      "centroidType": "ZC",
                      "centroid": {
                        "zipCode": "10101",
                        "carrierRoute": "C201"
                      },
                      "radiusType": "M",
                      "radiusValue": "10",
                      "doNotCrossState": "Y"
                    },
                    {
                      "centroidType": "Z9",
                      "centroid": {
                        "zip4": "101011209"
                      },
                      "radiusType": "D",
                      "radiusValue": "20",
                      "doNotCrossState": "N"
                    }
                  ]
                },
                {
                  "criterionCode": "polygon",
                  "values": [
                    {
                      "mappings": [
                        {
                          "latitude": "40.73061",
                          "longitude": "-73.935242"
                        },
                        {
                          "latitude": "60.734550",
                          "longitude": "-95.3456422"
                        },
                        {
                          "latitude": "50.23566",
                          "longitude": "-90.123457"
                        },
                        {
                          "latitude": "38.234454",
                          "longitude": "-75.453433"
                        }
                      ]
                    }
                  ],
                  "omitValues": [
                    {
                      "mappings": [
                        {
                          "latitude": "44.123424",
                          "longitude": "-75.444222"
                        },
                        {
                          "latitude": "55.676550",
                          "longitude": "-78.365722"
                        },
                        {
                          "latitude": "50.676656",
                          "longitude": "-80.167557"
                        }
                      ]
                      
                    }
                  ]
                }
              ]
            }
          }
        }
      }
    },
    "all": {
      "data": {
        "type": "counts",
        "attributes": {
          "criteria": {
            "datasetCode": "CONSUMER",
            "geoCriteria": {
              "criterionCode": "geoCriteria",
              "binaryOperator": "OR",
              "children": [{
                "criterionCode": "zipCode",
                "values": ["90210",
                "90215",
                "10102",
                "90300-90400",
                "10100-10200"],
                "omitValues": ["90345"]
              },
              {
                "criterionCode": "state",
                "values": ["AZ",
                "NY"]
              },
              {
                "criterionCode": "city",
                "values": ["AZ:Scottdale",
                "NY:New York"]
              },
              {
                "criterionCode": "zip4",
                "values": ["notnull"]
              },
              {
                "criterionCode": "radius",
                "values": [{
                  "centroidType": "ZC",
                  "centroid": {
                    "zipCode": "10101",
                    "carrierRoute": "C201"
                  },
                  "radiusType": "M",
                  "radiusValue": "10",
                  "doNotCrossState": "Y"
                },
                {
                  "centroidType": "Z9",
                  "centroid": {
                    "zip4": "101011209"
                  },
                  "radiusType": "D",
                  "radiusValue": "20",
                  "doNotCrossState": "N"
                }]
              },
              {
                "criterionCode": "polygon",
                "values": [{
                  "mappings": [{
                    "latitude": "40.73061",
                    "longitude": "-73.935242"
                  },
                  {
                    "latitude": "60.734550",
                    "longitude": "-95.3456422"
                  },
                  {
                    "latitude": "50.23566",
                    "longitude": "-90.123457"
                  },
                  {
                    "latitude": "38.234454",
                    "longitude": "-75.453433"
                  }]
                }],
                "omitValues": [{
                  "mappings": [{
                    "latitude": "44.123424",
                    "longitude": "-75.444222"
                  },
                  {
                    "latitude": "55.676550",
                    "longitude": "-78.365722"
                  },
                  {
                    "latitude": "50.676656",
                    "longitude": "-80.167557"
                  }]
                  
                }]
              }]
            },
            "demoCriteria": {
              "criterionCode": "demoCriteria",
              "binaryOperator": "AND",
              "children": [{
                "criterionCode": "dwellingType",
                "values": ["S",
                "A",
                "P"]
              },
              {
                "criterionCode": "recipientReliabilityCode",
                "values": ["1",
                "2"]
              },
              {
                "criterionCode": "onePerLivingUnit",
                "values": ["1"]
              },
              {
                "criterionCode": "apmFullSizeVan",
                "values": ["1",
                "2",
                "5"]
              },
              {
                "criterionCode": "childscoreAge03",
                "values": ["1-10"]
              },
              {
                  "criterionCode": "personBirthYearAndMonth",
                  "values": [{
                      "birthDate": "199006-201006",
                      "age": "22-46",
                      "months": ["7","8"],
                      "ageType" : "exact"
                  }]
              },
              {
                "criterionCode": "realtyModelEstAvailableEquity",
                "binaryOperator": "AND",
                "children": [{
                  "criterionCode": "realtyModelConfidenceCodev2",
                  "values": ["1",
                  "3"]
                },
                {
                  "criterionCode": "realtyModelEstAvailableEquitycodeV2",
                  "values": ["2",
                  "5"]
                }]
              },
              {
                "criterionCode": "realtyModelEstCurLoantoValue",
                "binaryOperator": "AND",
                "children": [{
                  "criterionCode": "realtyModelConfidenceCodev2",
                  "values": ["2",
                  "3"]
                },
                {
                  "criterionCode": "realtyModelEstCurLoantoValueRatiov2",
                  "values": ["10-100"]
                }]
              },
              {
                "criterionCode": "ownPets",
                "binaryOperator": "OR",
                "children": [{
                  "criterionCode": "ownACat",
                  "values": ["1"]
                },
                {
                  "criterionCode": "ownAPet",
                  "values": ["1"]
                }]
              },
              {
                "criterionCode": "phoneNumber1",
                "binaryOperator": "AND",
                "children": [{
                  "criterionCode": "phoneType",
                  "values": ["1"]
                },
                {
                  "criterionCode": "coverage",
                  "values": ["1"]
                },
                {
                  "criterionCode": "sanNumber",
                  "values": ["SAN12121"]
                }]
              },
              {
                "criterionCode": "gender",
                "values": ["M","F"]
              },
              {
                "criterionCode": "maritalStatus",
                "values": ["1M,5M"]
              }]
            }
          }
        }
      }
    }
  }
  constructor(public http: Http) {
  }

  getData(key) {
    console.log('CounterCriteriaSample#getData(): Get Data');
    // return this.http.get('/assets/data.json')
    // .map(res => res.json());
    return this.sampleData[key];
  }

}
