interface ISettingsStore {
    state: any;
}

const MOCK_SETTINGS = {
    "result": true,
    "data": [
        "main.json"
    ],
    "config": {
        "filename": "main.json",
        "tip_intervals": [
            [
                "1",
                "10"
            ],
            [
                "11",
                "100"
            ],
            [
                "101",
                "200"
            ],
            [
                "2102",
                "020"
            ],
            [
                "4545",
                "5416564456"
            ]
        ],
        "audio_scopes": [
            {
                "name": "Testovaya",
                "data": [
                    {
                        "range": [
                            "1",
                            "10"
                        ],
                        "files": [
                            "erl_rNHpW3o.jpg",
                            "browser.exe",
                            "ProjectMaker.exe",
                            "brave.exe",
                            "test.zp"
                        ]
                    },
                    {
                        "range": [
                            "11",
                            "100"
                        ],
                        "files": [
                            "Tanir & Tyomcha - Потеряли пацана.mp3"
                        ]
                    },
                    {
                        "range": [
                            "101",
                            "200"
                        ],
                        "files": [
                            "INSTASAMKA - ХЛОПАЙ.mp3"
                        ]
                    }
                ]
            }
        ],
        "site_scopes": [
            {
                "name": "stripchat",
                "domain": "stripchat.com",
                "observer_class": ".messages",
                "audio_set": "Testovaya"
            },
            {
                "name": "camvirt",
                "domain": "camvirt.com",
                "observer_class": ".msg-list-fvm.message-list",
                "audio_set": "Testovaya"
            }
        ],
        "work_rime": "00:10:00",
        "pauses": [
            {
                "from": "00:00:05",
                "to": "00:00:10"
            },
            {
                "from": "00:05",
                "to": "00:10"
            },
            {
                "from": "00:07:11",
                "to": "00:09:44"
            },
            {
                "from": "01:01:01",
                "to": "01:01:01"
            }
        ]
    }
};

class SettingsStore implements ISettingsStore {
    state: any;

    constructor() {
        // this.getSettings();
        this.state = MOCK_SETTINGS;
        console.log(this.state);
    }

    getSettings = () => {
        const port = chrome.runtime.connect('', { name: "get_setting_items" });

        port.onMessage.addListener(response => {
            console.log(response);
            this.state = response;
        });
    }
}

export default SettingsStore;