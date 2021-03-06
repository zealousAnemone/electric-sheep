# Electric Sheep

## An app for recording, sharing, analyzing, and synthesizing dreams

## MVP

- [ ] User can log into a private acct
  - [ ] username/pw
  - [ ] Name
  - [ ] Birthday
  - [ ] Location
  - Note: All fields except username optional
- [ ] User can record dreams
  - [ ] Content
  - [ ] Date
  - [ ] Weather, moon phase, menstrual cycle, etc (auto if opted in)
    - [ ] period can be guessed by LMC/length, or manual
- [ ] User can tag dreams
- [ ] User can search by tag or weather etc.
- [ ] User can share dream via FB, Twitter.

## Stretch

- [ ] User can make acct publically searchable
- [ ] User can see dreams nearby
- [ ] User can search public dreams by tag, weather, time period, astrological sign, location, etc.

## Super Stretch

- [ ] User can view automatically generated data dashboard

## Super Duper Stretch

- [ ] User can create dreams using AI/ML

## Structure

The app will follow this general structure, using Next on frontend and (tentatively) Flask on the backend

### Frontend

- Login page
- Once logged in...

  - Record dream page
  - my acct
  - Your dream diary
  - Search bar

  ### Backend

  ### Database

  - User

    - id
    - email
    - name
    - birthday
    - location

  - Dream
    - connected to user on user_id
    - Text
    - tags
    - enabled auto meta-data, e.g. weather, menstrual cycle, moon phase, etc.
