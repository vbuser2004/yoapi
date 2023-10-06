# yoyoapi

Yolink / Yosmart API Wrapper for Individual Product Users

## Description

yoyoapi is an open source wrapper that facilitates the use of the [YoSmart API](http://doc.yosmart.com) to manage YoLink devices. Specifically, yoyoapi supports individual product users ([UAC](http://doc.yosmart.com/docs/overall/intro)) API, also known as [Open API V2](http://doc.yosmart.com/docs/protocol/openAPIV2).

## Technology

yoyoapi is written in Typescript. Every effort has been made to minimize the number of external packages used, and instead, favor native javascript functionality (such as fetch()).

## Default URLs

The default URL for Open API V2 is: <https://api.yosmart.com/open/yolink/v2/api>

The default URL for obtaining a authorization token is: <https://api.yosmart.com/open/yolink/token>

### Accounts and Credentials

To use the yoyoapi wrapper you will need:

- An account within the YoLink system using the YoLink application on an Android or Apple device.
- Create Access Credentials for the API, including a UAID and a Secret Key.
  - From within the app: [Account] => [Advanced Settings] => [Personal Access Credentials] => [+]

## Disclaimer

yoyoapi, and any associated websites or works, are not affiliated with or in anyway endorsed by YoSmart Inc., or their division, YoLink.

Any product names, logos, brands, and other trademarks or images featured or referred to within are the property of their respective trademark holders. These trademark holders are not affiliated with yoyoapi. These trademark holders do not sponsor or endorse yoyoapi or any of it's software, comments, or services.

Further, yoyoapi declares no affiliation, sponsorship, nor any partnerships with any registered trademarks unless otherwise stated.