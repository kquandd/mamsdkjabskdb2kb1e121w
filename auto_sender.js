    /* GLOBALS */
    var W4RDSETTINGS = {}
    var W4RDPLANNEDACTIONS = {}

    function W4rdStartScript() {
        /* Load data */
          /* General settings */
        W4rdLoadData();
          /* Planned actions  */
        W4rdLoadPlannedActions();

        /* Init Debug */
          /* If debug cenario handle it */

        /* Continue planned actions */
          /* Send any pending action */

        /* Display UI */
          /* Listen to new commands */
    }

    // Load data
    function W4rdLoadData() {
        // Check if settings already set
        let tempW4rdSettings = JSON.parse(localStorage.getItem('W-fs42-]12#-9921-!Çaa'))
        if (tempW4rdSettings !== null) {
            W4RDSETTINGS = tempW4rdSettings;
        } else {
            W4RDSETTINGS = {
                active: false,
                show: false,
            }
        }
        W4RDSETTINGS.active = true; // This will have a small ui or smth to turn on/off
        W4RDSETTINGS.show = true; // This will have a small ui or smth to turn on/off
        localStorage.setItem('W-fs42-]12#-9921-!Çaa', JSON.stringify(W4RDSETTINGS))
        console.log(W4RDSETTINGS)
    }

    // Load Planned Action
    function W4rdLoadPlannedActions() {
        var W4RDPLANNEDACTIONS = {}
    }

    function W4rdPlanAction() {
        let w4rd_planned_action = new URLSearchParams();
        FetchImportantKeyValue().then(ImportantKeyValue => {
            if (ImportantKeyValue) {
                w4rd_planned_action.append(String(ImportantKeyValue.name), String(ImportantKeyValue.value));
            } else {
                console.log("Important key-value pair not found.");
            }
        }).catch(error => {console.error('Error in FetchImportantKeyValue:', error);});
        w4rd_planned_action.append('template_id', '');
        w4rd_planned_action.append('source_village', '24805');
        w4rd_planned_action.append('spear', '13');
        w4rd_planned_action.append('sword', '12');
    }

    // ACTION: Send command
    function W4rdSendCommand(w4rd_planned_action) {
        fetch(`https://${game_data.world}.tribalwars.com.pt/game.php?village=24805&screen=place&ajax=confirm`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                'template_id': '',
                'source_village': '24805',
                'spear': '13',
                'sword': '12',
                'axe': '',
                'spy': '20',
                'light': '',
                'heavy': '25',
                'ram': '1',
                'catapult': '3',
                'knight': '',
                'snob': '',
                'x': '527',
                'y': '649',
                'input': '',
                'attack': 'l',
                'h': '2b57c091'
            })
        })
            .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
            .then(data => {
            if (data.error !== undefined) {
                console.log(data.error[0])
            }
            const contentDiv = document.querySelector('#popup_box_popup_command .popup_box_content');
            if (contentDiv) {
                contentDiv.innerHTML = data.dialog;
            }
            //console.log(data);
        })
            .catch(error => {
            console.error('Error:', error);
        });
    }

    // UTILS: HTML to send command
    const $CommandFormPopUp = `
    <div class="popup_box_container">
    <div id="popup_box_popup_command" class="popup_box show" style="width: 700px; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);">
    <div class="popup_box_content">
    </div>
    </div>
    </div>
    `;

    // UTILS: FETCH IMPORTANT KEYVALUE
    function FetchImportantKeyValue() {
        console.log('Fetching important key->value');
        return fetch(`https://${game_data.world}.tribalwars.com.pt/game.php?village=${game_data.village.id}&screen=place&ajax=command`)
            .then(response => {
            if (!response.ok) {
                throw new Error('A network error occurred');
            }
            return response.json();
        })
            .then(data => {
            const contentDiv = document.querySelector('#popup_box_popup_command .popup_box_content');
            if (contentDiv) {
                contentDiv.innerHTML = data.dialog;
            }
            const ImportantKeyValue = contentDiv.querySelector('[type="hidden"]');
            return ImportantKeyValue ? { name: ImportantKeyValue.name, value: ImportantKeyValue.value } : null;
        })
            .catch(error => {
            console.error('A problem occurred:', error);
            return null; // Return null or a default value in case of error
        });
    }

    $(document).ready(function() {
        W4rdStartScript();
    });