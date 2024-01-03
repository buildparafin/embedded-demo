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

### 3. Create a test offer
To display an embedded offer to a business with Parafin Elements, you need to first [create a sandbox business and person with a pre-approved offer](https://docs.parafin.com/present-offers/elements/#2-create-a-business-and-person). Update the `personId` [variable in the App.js](https://github.com/buildparafin/parafin-elements-flex-quickstart/blob/42ca76a590d9145725b4931e46da6b41aa1cff0c/src/App.js#L14) file with your newly created person.


### 4. Run the app
You're now ready to run the app and check out your embedded offer!

In the project directory, run:

```bash
$ npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
