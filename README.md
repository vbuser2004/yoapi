# yoyoAPI

Yolink / Yosmart API Wrapper for Individual Product Users

## Description

yoyoAPI is an open source wrapper that facilitates the use of the [YoSmart API](http://doc.yosmart.com) to manage YoLink devices. Specifically, yoyoAPI supports individual product users ([UAC](http://doc.yosmart.com/docs/overall/intro)) API, also known as [Open API V2](http://doc.yosmart.com/docs/protocol/openAPIV2).

## Features

* Automated Authentication and Token Refresh - yoyoAPI will automatically authenticate on the first API request, and then continually refresh as JWT tokens expire.
* 


## Technology

yoyoAPI is written in TypeScript. Every effort has been made to minimize the number of external packages used, and instead, favor native JavaScript methods (such as fetch()).

* Typescript
* Zod 


## Default URLs

The default URL for Open API V2 is: <https://api.yosmart.com/open/yolink/v2/api>

The default URL for obtaining a authorization token is: <https://api.yosmart.com/open/yolink/token>

### Accounts and Credentials

To use the yoyoAPI wrapper you will need:

- An account within the YoLink system using the YoLink application on an Android or Apple device.
- Create Access Credentials for the API, including a UAID and a Secret Key.
  - From within the app: [Account] => [Advanced Settings] => [Personal Access Credentials] => [+]

## Disclaimer

yoyoAPI, and any associated websites or works, are not affiliated with or in anyway endorsed by YoSmart Inc., or their division, YoLink.

Any product names, logos, brands, and other trademarks or images featured or referred to within are the property of their respective trademark holders. These trademark holders are not affiliated with yoyoAPI. These trademark holders do not sponsor or endorse yoyoAPI or any of it's software, comments, or services.

Further, yoyoAPI declares no affiliation, sponsorship, nor any partnerships with any registered trademarks unless otherwise stated.
