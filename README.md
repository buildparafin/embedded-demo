# Parafin Elements Quickstart

[Parafin Elements](https://docs.parafin.com/elements/overview) is a React component library that allows you to embed Parafin's capital experience directly within your app. Get up and running in minutes with this quickstart guide. 


![Elements preview](/img/elements-preview.gif)

## Prerequisites 
* Access to a [Parafin dashboard](https://dashboard.parafin.com)
* [Node.js](https://nodejs.org/en/)


## Instructions

### 1. Clone repo
First, clone the quickstart repository and install dependencies:

```bash
$ git clone https://github.com/buildparafin/parafin-elements-flex-quickstart.git
$ cd parafin-elements-flex-quickstart
$ npm install
```

### 2. Fetch and include API keys
Next, Navigate to the [Settings > API keys](https://dashboard.parafin.com/settings/api-keys) in your Parafin dashboard and fetch your sandbox Client ID and Client secret.

Rename the `sample.env` file to `.env` and populate with your Client ID and Client secret.

```bash
$ mv sample.env .env
```

```bash
# .env
PARAFIN_CLIENT_ID="<your-client-id>"
PARAFIN_CLIENT_SECRET="<your-client-secret>"
```

### 3. Create a test business
In order to display an embedded offer to a business with Parafin Elements, you first need to create a business. Create a new test business with a pre-approved offer using the curl command below.

> ⚠️ Heads up! <br/>
> Make sure you update the `client_id` and `client_secret` in the curl request with your respective keys. If you end up changing the `business_external_id` value, don't forget to update the [`businessId`](https://github.com/mattmitchell6/parafin-elements-quickstart/blob/c1cd49696876da1c5abcd3956369c3c204d62d61/src/App.js#L21) variable found in the project's App.js file. 

```bash
$ curl -XPOST  https://api.dev.parafin.com/business \
  -u client_id:client_secret \
  -d '{
    "business_external_id": "yourBusinessId",
    "product_type": "flex_loan"
  }' 
```

### 4. Run the app
You're now ready to run the app and check out your embedded offer!

In the project directory, run:

```bash
$ npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.