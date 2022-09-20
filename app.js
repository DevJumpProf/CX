'use strict';
const bizSdk = require('facebook-nodejs-business-sdk');

const ServerEvent = bizSdk.ServerEvent;

const EventRequest = bizSdk.EventRequest;
const UserData = bizSdk.UserData;
const CustomData = bizSdk.CustomData;
const Content = bizSdk.Content;

const access_token = 'EAAJB6yxpCN0BAJh6NsG9KP4l0NLxGLBQKY09iYjOAeuit9PDWrYoDu53WwsaukqIz1FzVX4cZAh7merzZAWeZCTPZBOn7OROzlvJPY8UaLs46AFqaW4pTXtsITWOcyQZA0pmpfZCZA30xxrkmK6J97v9ZB8lCtPZAEJBEcUcRxpiQDhBUTLtlsWwAYVEpGOpF13oZD';
const pixel_id = '1492261177969460';
const api = bizSdk.FacebookAdsApi.init(access_token);


let current_timestamp = Math.floor(new Date() / 1000);

const userData_0 = (new UserData())
    .setEmails(["7b17fb0bd173f625b58636fb796407c22b3d16fc78302d79f0fd30c2fc2fc068"])
    .setPhones([]);
const customData_0 = (new CustomData())
    .setValue(142.52)
    .setCurrency("USD");
const serverEvent_0 = (new ServerEvent())
    .setEventName("Purchase")
    .setEventTime(1663343948)
    .setUserData(userData_0)
    .setCustomData(customData_0)
    .setActionSource("email");

const eventsData = [serverEvent_0];
const eventRequest = (new EventRequest(access_token, pixel_id))
    .setEvents(eventsData);
eventRequest.execute();

