#  gmailto

A Safari extension that makes `mailto:` links use GMail in your browser.

## Why

For some reason macOS does not seem to support opening `mailto:` in Safari. 
You can choose Safari to be your default email application, but nope, 
when you click on a `mailto:` link you get the error message, 
"Safari cannot open the page because the address is invalid."

This extension works around that by translating those clicks into opening
a new GMail tab with the email ready to be sent.

## Installation

To install, [download the extension](https://github.com/kevinoliver/gmailto/releases) and then run the app. I haven't dealt with code signing (read as: paid for an Apple developer account) so you need to 
turn on Developer mode in Safari and then [allow running of unsigned extensions](https://developer.apple.com/documentation/safariservices/safari_web_extensions/running_your_safari_web_extension#3744467).

While this is a Safari browser extension I'm pretty sure that it'd work with Chrome, Firefox, or any other browser supporting the [WebExtensions API](https://extensionworkshop.com/documentation/develop/about-the-webextensions-api/). See the files in [`gmailto Extension/Resources/`](gmailto%20Extension/Resources/).

## Usage

Click on `mailto:` links and they should open a new compose tab in GMail.

## Attribution

The [Send Email icon](https://icons8.com/icon/71474/send-email) is by [Icons8](https://icons8.com).
