# Project 4 : Simple AWS Lambda

Since we use at work AWS tools and I had no oportunity 
to work with them I favored using AWS for this example.

## Minor remarks
- as I understood from Project 4 description I should run this
  on AWS website and take screenshot from there;
- I did It a bit differently, because I wanted write and store Lambda locally and use one of frameworks available to achieve that: `serverless.js`;
- screenshots are in directory `/assets`.
- as you can see on screenshots I rechecked if entered value is a number and if was, then counting second square proceded
- I also polished rounding to 3 decimal places

## Architecture
- for shortness of time I use generated endpoint on `amazonaws.com`;
- lambda, however, together with YAML file was written locally;
- deployment: with command `serverless deploy` on `amazonaws.com`;
- I copied generated endpoint URL to browser and I replaced string with curly brackets with a number
- after that square of that number was generated
- e.g.:
  - replace
    `... .amazonaws.com/dev/square-number/{number}`;
  - with
    `... .amazonaws.com/dev/square-number/4`;
  - you will see a response: 
    `{"message":"Second square of number 4 is 16."}`

## Prerequisites
1. install `serverless` globally;
2. create accesskey and secret access key in AWS;
3. set them in `serverless`;

### more informations:
In a guide how to create simple AWS Lambda with `Serverless` [in steps 1 and 2](https://appdividend.com/2019/01/12/aws-lambda-and-node-js-tutorial-getting-started-with-serverless/).