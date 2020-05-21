// populate these two fields based on your local dev environment
const localIP = "192.168.56.1";
const port = "8888";

function generateWebHookUrlString() {
    const teamsUrlIdentifier = ".teams-url";
    const rocketCharUrlIdentifier = ".rocket-chat-url";
    let webHookUrls = {};
    let splunkWebHookUrls = [];

    // loop through teams urls
    for (i = 0; i < $(teamsUrlIdentifier).length; i++) {
        // Create object
        const chatAppUrl = {
            "chatApp": "TEAMS",
            "url": $(teamsUrlIdentifier).eq(i).val()
        };

        // Push object to the array
        splunkWebHookUrls.push(chatAppUrl);
    }

    // loop through rocket chat urls
    for (i = 0; i < $(rocketCharUrlIdentifier).length; i++) {
        // Create object
        const chatAppUrl = {
            "chatApp": "ROCKET_CHAT",
            "url": $(rocketCharUrlIdentifier).eq(i).val()
        };

        // Push object to the array
        splunkWebHookUrls.push(chatAppUrl);
    }

    webHookUrls.splunkWebHookUrls = splunkWebHookUrls;
    return JSON.stringify(webHookUrls);
}

// url safe UTF-8 base 64 encoding
function base64EncodeString(string) {
    return btoa(string).replace('+', '-').replace('/', '_').replace(/=+$/, '');
}

function createNewTeamsUrlInput() {
    let txtNewInputBox = document.createElement('div');
    txtNewInputBox.innerHTML = "<input type='text' class='teams-url'><br />";
    document.getElementById("add-teams-url-here").appendChild(txtNewInputBox);
}

function createNewRocketChatUrlInput() {
    let txtNewInputBox = document.createElement('div');
    txtNewInputBox.innerHTML = "<input type='text' class='rocket-chat-url'><br />";
    document.getElementById("add-rocket-chat-url-here").appendChild(txtNewInputBox);
}

function generateUrl() {
    // temporarily for local dev
    const baseUrl = `http://${localIP}:${port}/splunk/alert/`;
    const token = $(".token").val();
    const base64EncodedUrl = base64EncodeString(generateWebHookUrlString());

    return `${baseUrl}${token}/${base64EncodedUrl}`;
}
