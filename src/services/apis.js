
// const BASE_URL = "https://lostandfound-jgbr.onrender.com";

const BASE_URL = "http://localhost:3000";

const USER_URL = BASE_URL + "/api/v1/user";
const LOST_ITEMS_URL = BASE_URL + "/api/v1/lostitem";
const FOUND_ITEM_URL = BASE_URL + "/api/v1/founditem";
const NOTIFICATION_URL = BASE_URL + "/api/v1/notifications";
const REDEMPTION_URL = BASE_URL + "/api/v1/redemption"; 
const REWARD_HISTORY_URL = BASE_URL + "/api/v1/reward-history";
const RESET_PASSWORD_URL = BASE_URL + "/api/v1/resetPassword";

export const APP_DETAILS = USER_URL + "/app-details";
export const SUBSCRIBE_USER = USER_URL + "/subscribe-user";
export const SEND_OTP_URL = USER_URL + "/send-otp";
export const RESEND_OTP_URL = USER_URL + "/resend-otp";
export const SIGNUP_URL = USER_URL + "/signup";
export const LOGIN_URL = USER_URL + "/login";
export const LOGOUT_URL = USER_URL + "/logout";
export const EDIT_PROFILE = USER_URL + "/edit-profile";
export const LEADERBOARD_URL = USER_URL + "/leaderboard";
export const GET_DETAILS_URL = USER_URL + "/getDetails";


export const POST_FOUND_ITEM = FOUND_ITEM_URL + "/postFoundItem";
export const GET_FOUND_ITEMS = FOUND_ITEM_URL + "/getFoundItems";
export const GET_FOUND_ITEM_BY_ID = FOUND_ITEM_URL + "/getFoundItemsById";
export const GET_FOUND_ITEMS_BY_USER_ID = FOUND_ITEM_URL + "/getFoundItemsByUId";
export const UPDATE_FOUND_ITEMS = FOUND_ITEM_URL + "/updateFoundItems/";
export const GET_RETREIVED__ITEMS = FOUND_ITEM_URL + "/getRetreivedItems";


export const POST_LOST_ITEM = LOST_ITEMS_URL + "/postLostItem";
export const GET_LOST_ITEMS = LOST_ITEMS_URL + "/getLostItems";
export const GET_LOST_ITEMS_BY_ID = LOST_ITEMS_URL + "/getLostItemsById";
export const GET_LOST_ITEMS_BY_USER_ID = LOST_ITEMS_URL + "/getLostItemsByUId";

export const RESET_PASSWORD_TOKEN = RESET_PASSWORD_URL + "/generate-reset-token";
export const RESET_PASSWORD = RESET_PASSWORD_URL + "/reset-password"; 

export const GET_NOTIFICATIONS=NOTIFICATION_URL+"/get-notifications";
