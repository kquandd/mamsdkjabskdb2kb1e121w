   // Check if jquery present, if not inject it

    // Wait for Dom completion
    $(document).ready(function() {
        w4StartScript();
    });

    // main
    function w4StartScript() {
        w4DisplayUI();
        w4BuildEventListeners();
        //w4LoadSavedData()
    }


    // Single command planner html
    function w4PlanCommandElement() {
        return `
        <div id="w4-plan-command" class="vis moveable widget" style="width: 100%;">
            <h4 id="w4-tab" class="head with-button ui-sortable-handle">
                Single command planner
                <img id="w4-btn-singlecommand-show" style="cursor: pointer; position: absolute; margin-right: 3px; right: 0; top: 50%; transform: translateY(-50%);" src="graphic/plus.png">
            </h4>
            <form id="w4-plan-command-form" name="w4-plan-command-form">
            <div id="w4-plan-command-inpt" style="width: 100%; margin-bottom: 15px; flex-direction: column; display: none ">
                <div class="w4-inpt" style="margin-left: 5px; margin-bottom: 3px; margin-top: 3px; flex-direction: column">
                    <label for="w4-plan-command-form-send"><b>Time to SEND troops</b></label><label>  =>  </label>
                    <input id="w4-plan-command-form-send" type="text" placeholder="hh:min:s" style="flex: 1;">
                </div>
                <div class="w4-inpt" style="margin-left: 5px; margin-bottom: 3px; margin-top: 3px; flex-direction: column">
                    <label for="w4-plan-command-form-arrive"><b>Time for troops to ARRIVE</b></label><label>  =>  </label>
                    <input id="w4-plan-command-form-arrive" type="text" placeholder="hh:min:s" style="flex: 1;">
                </div>
                <div class="w4-inpt" style="margin-left: 5px; margin-bottom: 3px; margin-top: 3px; flex-direction: column">
                    <label for="w4-plan-command-form-date"><b>Target date</b></label><label>  =>  </label>
                    <input id="w4-plan-command-form-date" type="date" style="flex: 1;">
                </div>
                <div class="w4-inpt" style="margin-left: 5px; margin-bottom: 3px; margin-top: 8px; flex-direction: column">
                    <label for="w4-plan-command-form-delay"><b>Milliseconds Delay</b></label><label>  =>  </label>
                    <input id="w4-plan-command-form-delay" type="text" placeholder="milliseconds" style="flex: 1;">
                </div>
                <div class="w4-inpt" style="margin-left: 5px; margin-bottom: 3px; margin-top: 8px; flex-direction: column">
                    <label for="w4-plan-command-form-offset"><b>Milliseconds Offset</b></label><label>  =>  </label>
                    <input id="w4-plan-command-form-offset" type="text" placeholder="milliseconds" style="flex: 1;">
                </div>
                <div class="w4-inpt" style="margin-left: 5px; margin-bottom: 3px; margin-top: 8px; flex-direction: column">
                    <label for="w4-plan-command-form-coords"><b>Coordinates</b></label><label>  =>  </label>
                    <input id="w4-plan-command-form-coords" type="text" placeholder="000|000" style="flex: 1;">
                </div>
                <div class="w4-inpt" style="margin-left: 5px; margin-bottom: 3px; margin-top: 8px; flex-direction: column">
                    <label><b>Troops model</b></label><label>  =>  </label>
                    <select id="w4-plan-command-form-select" name="model-action">
                    <option id="w4-plan-command-form-troops-all" value="troops-all">All troops</option>
                    <option id="w4-plan-command-form-troops-custom" value="troops-custom">Custom troops</option>
                    </select>
                </div>
                <div id="w4-troop-form" class="container" style="display: none; margin-left: 5px; grid-template-columns: repeat(10, 1fr); gap: 1px;">
                    <div class="w4-fmo" style="display: flex; flex-direction: column; align-items: center;">
                        <img src="https://dspt.innogamescdn.com/asset/69990994/graphic/unit/unit_spear.png" alt="w4spear" style="margin-top: 5px;">
                        <input id="w4-custom-spear-amount" type="text" style="width: 50%; margin-top: 5px;">
                    </div>
                    <div class="w4-fmo" style="display: flex; flex-direction: column; align-items: center;">
                        <img src="https://dspt.innogamescdn.com/asset/69990994/graphic/unit/unit_sword.png" alt="w4sword" style="margin-top: 5px;">
                        <input id="w4-custom-sword-amount" type="text" style="width: 50%; margin-top: 5px;">
                    </div>
                    <div class="w4-fmo" style="display: flex; flex-direction: column; align-items: center;">
                        <img src="https://dspt.innogamescdn.com/asset/69990994/graphic/unit/unit_axe.png" alt="w4axe" style="margin-top: 5px;">
                        <input id="w4-custom-axe-amount" type="text" style="width: 50%; margin-top: 5px;">
                    </div>
                    <div class="w4-fmo" style="display: flex; flex-direction: column; align-items: center;">
                        <img src="https://dspt.innogamescdn.com/asset/69990994/graphic/unit/unit_spy.png" alt="w4spy" style="margin-top: 5px;">
                        <input id="w4-custom-spy-amount" type="text" style="width: 50%; margin-top: 5px;">
                    </div>
                    <div class="w4-fmo" style="display: flex; flex-direction: column; align-items: center;">
                        <img src="https://dspt.innogamescdn.com/asset/69990994/graphic/unit/unit_light.png" alt="w4light" style="margin-top: 5px;">
                        <input id="w4-custom-light-amount" type="text" style="width: 50%; margin-top: 5px;">
                    </div>
                    <div class="w4-fmo" style="display: flex; flex-direction: column; align-items: center;">
                        <img src="https://dspt.innogamescdn.com/asset/69990994/graphic/unit/unit_heavy.png" alt="w4heavy" style="margin-top: 5px;">
                        <input id="w4-custom-heavy-amount" type="text" style="width: 50%; margin-top: 5px;">
                    </div>
                    <div class="w4-fmo" style="display: flex; flex-direction: column; align-items: center;">
                        <img src="https://dspt.innogamescdn.com/asset/69990994/graphic/unit/unit_ram.png" alt="w4ram" style="margin-top: 5px;">
                        <input id="w4-custom-ram-amount" type="text" style="width: 50%; margin-top: 5px;">
                    </div>
                    <div class="w4-fmo" style="display: flex; flex-direction: column; align-items: center;">
                        <img src="https://dspt.innogamescdn.com/asset/69990994/graphic/unit/unit_catapult.png" alt="w4catapult" style="margin-top: 5px;">
                        <input id="w4-custom-catapult-amount" type="text" style="width: 50%; margin-top: 5px;">
                    </div>
                    <div class="w4-fmo" style="display: flex; flex-direction: column; align-items: center;">
                        <img src="https://dspt.innogamescdn.com/asset/69990994/graphic/unit/unit_knight.png" alt="w4knight" style="margin-top: 5px;">
                        <input id="w4-custom-knight-amount" type="text" style="width: 50%; margin-top: 5px;">
                    </div>
                    <div class="w4-fmo" style="display: flex; flex-direction: column; align-items: center;">
                        <img src="https://dspt.innogamescdn.com/asset/69990994/graphic/unit/unit_snob.png" alt="w4snob" style="margin-top: 5px;">
                        <input id="w4-custom-snob-amount" type="text" style="width: 50%; margin-top: 5px;">
                    </div>
                </div>
                <div class="w4-content" style="margin-left: 5px; margin-top: 8px; flex-direction: column">
                    <input id="w4-troop-form-save" type="button" class="btn" value="Save">
                    <input id="w4-troop-form-reset" type="button" class="btn" value="Reset" style="margin-left: 4px;">
                    <input id="w4-troop-form-plan-command" type="button" class="btn" value="Plan" style="margin-left: 30px;">
                </div>
            </div>
            </form>
        </div>
        `;
    }

    // Main UI html
    function w4MainUIElement() {
        return `
            <div class="vis moveable widget" style="width: 75%;">
                 <h4 id="w4-main-tab" class="head with-button ui-sortable-handle">
                     Auto sender v0.0.1
                     <img id="w4-btn-autosender-show" style="cursor: pointer; position: absolute; margin-right: 3px; right: 0; top: 50%; transform: translateY(-50%);" src="graphic/plus.png">
                 </h4>
                 <div id="w4-script-options" style="display: none">
                 </div>
                 <div id="w4-script-options-planned" style="display: none; margin-top: -15px">
                 </div>
            </div>
            `;
    }

    // Planned command html
    function w4PlannedCommandElement() {
        // insert new event in list
        return `
        <div class="event-row" style="display: flex; justify-content: space-between; padding: 10px; border-bottom: 1px solid #ccc;">
            <div class="event-info">Event Title 1</div>
            <div class="event-info">Date/Time</div>
            <div class="event-info">Location</div>
            <div class="event-info">Other Info</div>
        </div>
        `;
    }

    // Planned commands block html
    function w4PlannedCommandsElement() {
        return `
        <div id="w4-planned-commands" class="vis moveable widget" style="width: 100%;">
            <h4 id="w4-tab" class="head with-button ui-sortable-handle">
                Planned commands
                <img id="w4-btn-plannedcommands-show" style="cursor: pointer; position: absolute; margin-right: 3px; right: 0; top: 50%; transform: translateY(-50%);" src="graphic/plus.png">
            </h4>
            <div id="w4-planned-commands-tab" style="width: 100%; margin-bottom: 15px; flex-direction: column; display: none">
            </div>
        </div>
        `;
    }

    // Build UI
    function w4BuildUIElements() {
        let w4UIElements = []
        w4UIElements.push(w4PlanCommandElement());
        return w4UIElements;
    }

    // Display main UI
    function w4DisplayUI() {
        $('#command-form-warning').prepend(w4MainUIElement())

        let w4UIElements = w4BuildUIElements();

        $.each(w4UIElements, function(index, w4Element) {
            $('#w4-script-options').append(w4Element);
        });

        $('#w4-script-options-planned').append(w4PlannedCommandsElement())
    }

    // Utils: swap auto sender show/hide values
    function w4AutoSenderShow() {
        let w4btn = $('#w4-btn-autosender-show');
        if (w4btn.attr('src') === 'graphic/plus.png') {
            w4btn.attr('src', 'graphic/minus.png');
            $('#w4-script-options').css('display', 'flex');
            $('#w4-script-options-planned').css('display', 'flex');
        } else {
            w4btn.attr('src', 'graphic/plus.png');
            $('#w4-script-options').css('display', 'none');
            $('#w4-script-options-planned').css('display', 'none');
        }
    }

    // Utils: swap plan command show/hide values
    function w4PlanCommandShow() {
        let w4btn = $('#w4-btn-singlecommand-show');
        if (w4btn.attr('src') === 'graphic/plus.png') {
            w4btn.attr('src', 'graphic/minus.png');
            $('#w4-plan-command-inpt').css('display', 'flex');
        } else {
            w4btn.attr('src', 'graphic/plus.png');
            $('#w4-plan-command-inpt').css('display', 'none');
        }
    }

    // Utils: swap planned commands show/hide values
    function w4PlannedCommandsShow() {
          let w4btn = $('#w4-btn-plannedcommands-show')
            if (w4btn.attr('src') === 'graphic/plus.png') {
                w4btn.attr('src', 'graphic/minus.png');
                $('#w4-planned-commands-tab').css('display', 'flex');
            } else {
                w4btn.attr('src', 'graphic/plus.png');
                $('#w4-planned-commands-tab').css('display', 'none');
            }
    }

    // EVENT LISTENERS
    function w4BuildEventListeners() {
        // Listen for main show/hide button
        $('#w4-btn-autosender-show').click(function() {
            w4AutoSenderShow();
        });

        // Listen for single command planner show/hide btn
        $('#w4-btn-singlecommand-show').click(function() {
            w4PlanCommandShow();
        });

        // Listen for planned commands show/hide btn
        $('#w4-btn-plannedcommands-show').click(function() {
            w4PlannedCommandsShow();
        });

        // Listen for troop model select change
        $('#w4-plan-command-form-select').change(function() {
            if ($(this).val() === 'troops-custom') {
                $('#w4-troop-form').css('display', 'grid');
            } else {
                $('#w4-troop-form').css('display', 'none');
            }
        });

        // Listen for save btn
        $('#w4-troop-form-save').click(function() {
            // get user input
            // save it in localStorage
            //
        })
    }


    //console.log()
