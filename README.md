# MAIL-PASSIFY Demo

Hey guys, hope you're all doing fine. This is a demo repository for my npm package, **mail-passify**. Please read the steps to proceed.

## Step 1:-

There are **.env.sample** file already included in both folder, just change the name to **.env**.

### Note:-

If you want to use this module in **Next.js**, in your .env use this value:-
```js
NEXT_PUBLIC_DOMAIN = http://localhost:3000/api
```

Else if you want to use this module in **Node.js**, then modify the above value with the following:-
```js
NEXT_PUBLIC_DOMAIN = http://localhost:8000/
```

## Step 2:-

Run **npm i** in both folders.

## Step 3:-

```js
npx mail-passify init
```

This will generate a ``mail-passify.json`` file. In this file, you can configure your data. Please ensure that you maintain the variables in the JSON file as specified below.

| Name                                | Type    | Usage                                  |
| ----------------------------------- | ------- | -------------------------------------- |
| SENDGRID_SIGN_UP_MAIL_TITLE         | String  | Custom title for sign-up confirmation. |
| SENDGRID_SIGN_IN_MAIL_TITLE         | String  | Custom title for sign-in confirmation. |
| SENDGRID_FORGOT_PASSWORD_MAIL_TITLE | String  | Custom-Forgot-Password-Title.          |
| COMPANY_WEBSITE_URL                 | String  | Your company's website URL.            |
| COMPANY_WEBSITE_ICON                | String  | URL of your company's website icon.    |
| COMPANY_WEBSITE_ICON_WIDTH          | String  | Width of the website icon.             |
| COMPANY_CONTACT_MAIL                | String  | Company's contact email address.       |
| COMPANY_CUSTOMER_CARE_LINK          | String  | Link for customer support.             |
| COMPANY_INSTAGRAM_LINK              | String  | Link to your Instagram profile.        |
| COMPANY_INSTAGRAM_ICON              | String  | URL of the Instagram icon.             |
| COMPANY_TWITTER_LINK                | String  | Link to your Twitter profile.          |
| COMPANY_TWITTER_ICON                | String  | URL of the Twitter icon.               |
| COMPANY_YOUTUBE_LINK                | String  | Link to your YouTube channel.          |
| COMPANY_YOUTUBE_ICON                | String  | URL of the YouTube icon.               |
| COMPANY_MAIL_LINK                   | String  | Company's email address.               |
| COMPANY_MAIL_ICON                   | String  | URL of the mail icon.                  |
| COMPANY_FACEBOOK_LINK               | String  | Link to your Facebook page.            |
| COMPANY_FACEBOOK_ICON               | String  | URL of the Facebook icon.              |
| COMPANY_ANDROID_APP_LINK            | String  | Link to your Android app.              |
| COMPANY_ANDROID_APP_ICON            | String  | URL of the Android app icon.           |
| COMPANY_IOS_APP_LINK                | String  | Link to your iOS app.                  |
| COMPANY_IOS_APP_ICON                | String  | URL of the iOS app icon.               |
| REFERRED_POINTS                     | Integer | Points awarded to the referrer.        |
| REFERRED_PERSON_POINTS              | Integer | Points awarded to the referred person. |
| OTP_LIMITS                          | Integer | Max Times User Can Request For OTP.    |

Once you update these values, again run the command:-

```js
npx mail-passify init
```

This will update your referral points values in your MongoDB database.

## Step 4:-

Start the client folder with the command **yarn dev** and the server folder with **nodemon index.js**, depends on your usage.

Feel free to raise an issue if you find any bugs. Thanks in advance! 😁
