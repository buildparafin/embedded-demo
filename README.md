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

### 3. Create a pre-approved offer
There are a few requirements before you can display a pre-approved offer with Parafin Elements:

* Create a [Business](https://docs.parafin.com/share-data/methods/api#2-create-a-business), [Person](https://docs.parafin.com/share-data/methods/api#3-create-a-person), and [Bank Account](https://docs.parafin.com/share-data/methods/api#4-create-a-bank-account)
* [Generate a Capital Product Offer](https://docs.parafin.com/api#tag/Sandbox/operation/Generate%20Capital%20Product%20Offer) for the newly created Business
* Replace the `personId` in the `App.js` file with the ID from your newly created Person (`person_xxx`)


See [our documentation](https://docs.parafin.com/present-offers/elements/#2-create-a-business-and-person) for more detailed information on how to create a pre-approved offer.


### 4. Run the app
You're now ready to run the app and check out your embedded offer!

In the project directory, run:

```bash
$ npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
