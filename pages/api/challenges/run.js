import ApiHandler from "../../../utils/api";

async function runChallenge(req, res) {
  try {
    //handle challenge execution here
  } catch (e) {
    res.status(400).send("Bad Request");
  }
}

const API_METHODS = {
  ["POST"]: runChallenge,
};

export default ApiHandler(API_METHODS);
