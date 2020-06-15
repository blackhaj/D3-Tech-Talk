{
    "name": "App",
    "state": null,
    "children": [
      {
        "name": "BrowserRouter",
        "props": {},
        "children": [
          {
            "name": "Router",
            "state": {
              "location": {
                "pathname": "/",
                "search": "",
                "hash": "",
                "key": "pwbb3b"
              }
            },
            "props": {
              "history": {
                "length": 5,
                "action": "PUSH",
                "location": {
                  "pathname": "/",
                  "search": "",
                  "hash": "",
                  "key": "pwbb3b"
                }
              }
            },
            "children": [
              {
                "name": "Switch",
                "props": {},
                "children": [
                  {
                    "name": "ProtectedRoute",
                    "props": {
                      "exact": true,
                      "path": "/",
                      "component": "f component()",
                      "location": {
                        "pathname": "/",
                        "search": "",
                        "hash": "",
                        "key": "pwbb3b"
                      },
                      "computedMatch": {
                        "path": "/",
                        "url": "/",
                        "isExact": true,
                        "params": {}
                      }
                    },
                    "children": [
                      {
                        "name": "Route",
                        "props": {
                          "exact": true,
                          "path": "/",
                          "location": {
                            "pathname": "/",
                            "search": "",
                            "hash": "",
                            "key": "pwbb3b"
                          },
                          "computedMatch": {
                            "path": "/",
                            "url": "/",
                            "isExact": true,
                            "params": {}
                          },
                          "render": "f render()"
                        },
                        "children": [
                          {
                            "name": "Home",
                            "state": {
                              "graphData": {
                                "dates": [
                                  "2019-01-01",
                                  "2019-02-01",
                                  "2019-03-01",
                                  "2019-04-01",
                                  "2019-05-01",
                                  "2019-06-01",
                                  "2019-07-01",
                                  "2019-08-01",
                                  "2019-09-01",
                                  "2019-10-01",
                                  "2019-11-01",
                                  "2019-12-01"
                                ],
                                "balances": [
                                  "1000",
                                  "1077.8292851314",
                                  "1056.9707208628106",
                                  "1011.4230105318165",
                                  "1280.4601643568963",
                                  "1246.5236049556274",
                                  "1594.2490714050964",
                                  "1397.9523718173732",
                                  "1035.1826098757933",
                                  "1138.2455309109264",
                                  "1911.4746773973525",
                                  "1002.9841051342213"
                                ]
                              }
                            },
                            "props": {
                              "history": {
                                "length": 5,
                                "action": "PUSH",
                                "location": {
                                  "pathname": "/",
                                  "search": "",
                                  "hash": "",
                                  "key": "pwbb3b"
                                }
                              },
                              "location": {
                                "pathname": "/",
                                "search": "",
                                "hash": "",
                                "key": "pwbb3b"
                              },
                              "match": {
                                "path": "/",
                                "url": "/",
                                "isExact": true,
                                "params": {}
                              }
                            },
                            "children": [
                              {
                                "name": "TitleBar",
                                "props": {
                                  "title": "Home"
                                },
                                "children": [
                                  {
                                    "name": "Title",
                                    "props": {
                                      "title": "Home"
                                    },
                                    "stateType": {
                                      "stateful": false,
                                      "receiving": true,
                                      "sending": false
                                    }
                                  },
                                  {
                                    "name": "AccountIcon"
                                  }
                                ],
                                "stateType": {
                                  "stateful": false,
                                  "receiving": true,
                                  "sending": true
                                }
                              },
                              {
                                "name": "Card",
                                "props": {
                                  "data": {
                                    "dates": [
                                      "2019-01-01",
                                      "2019-02-01",
                                      "2019-03-01",
                                      "2019-04-01",
                                      "2019-05-01",
                                      "2019-06-01",
                                      "2019-07-01",
                                      "2019-08-01",
                                      "2019-09-01",
                                      "2019-10-01",
                                      "2019-11-01",
                                      "2019-12-01"
                                    ],
                                    "balances": [
                                      "1000",
                                      "1077.8292851314",
                                      "1056.9707208628106",
                                      "1011.4230105318165",
                                      "1280.4601643568963",
                                      "1246.5236049556274",
                                      "1594.2490714050964",
                                      "1397.9523718173732",
                                      "1035.1826098757933",
                                      "1138.2455309109264",
                                      "1911.4746773973525",
                                      "1002.9841051342213"
                                    ]
                                  }
                                },
                                "children": [
                                  {
                                    "name": "PlotlyComponent",
                                    "props": {
                                      "data": [
                                        {
                                          "x": [
                                            "2019-01-01",
                                            "2019-02-01",
                                            "2019-03-01",
                                            "2019-04-01",
                                            "2019-05-01",
                                            "2019-06-01",
                                            "2019-07-01",
                                            "2019-08-01",
                                            "2019-09-01",
                                            "2019-10-01",
                                            "2019-11-01",
                                            "2019-12-01"
                                          ],
                                          "y": [
                                            "1000",
                                            "1077.8292851314",
                                            "1056.9707208628106",
                                            "1011.4230105318165",
                                            "1280.4601643568963",
                                            "1246.5236049556274",
                                            "1594.2490714050964",
                                            "1397.9523718173732",
                                            "1035.1826098757933",
                                            "1138.2455309109264",
                                            "1911.4746773973525",
                                            "1002.9841051342213"
                                          ],
                                          "mode": "none",
                                          "type": "scattergl",
                                          "fill": "tozeroy",
                                          "fillcolor": "#4BA4F4"
                                        }
                                      ],
                                      "layout": {
                                        "width": 320,
                                        "height": 240,
                                        "margin": {
                                          "l": 30,
                                          "r": 10,
                                          "b": 30,
                                          "t": 10
                                        },
                                        "yaxis": {
                                          "range": [
                                            500,
                                            2000
                                          ],
                                          "type": "linear"
                                        },
                                        "xaxis": {
                                          "type": "date"
                                        }
                                      },
                                      "config": {
                                        "displayModeBar": false
                                      },
                                      "debug": false,
                                      "useResizeHandler": false,
                                      "style": {
                                        "position": "relative",
                                        "display": "inline-block"
                                      }
                                    },
                                    "stateType": {
                                      "stateful": false,
                                      "receiving": true,
                                      "sending": false
                                    }
                                  }
                                ],
                                "stateType": {
                                  "stateful": false,
                                  "receiving": true,
                                  "sending": true
                                }
                              }
                            ],
                            "stateType": {
                              "stateful": true,
                              "receiving": true,
                              "sending": true
                            }
                          },
                          {
                            "name": "Navbar"
                          }
                        ],
                        "stateType": {
                          "stateful": false,
                          "receiving": true,
                          "sending": true
                        }
                      }
                    ],
                    "stateType": {
                      "stateful": false,
                      "receiving": true,
                      "sending": true
                    }
                  }
                ],
                "stateType": {
                  "stateful": false,
                  "receiving": true,
                  "sending": true
                }
              }
            ],
            "stateType": {
              "stateful": true,
              "receiving": true,
              "sending": true
            }
          }
        ],
        "stateType": {
          "stateful": false,
          "receiving": true,
          "sending": true
        }
      }
    ],
    "stateType": {
      "stateful": false,
      "receiving": false,
      "sending": true
    }
  }