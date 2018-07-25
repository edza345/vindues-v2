$(document).ready(function() {
    var doubleModOn = 0;
    var doubleModOn2 = 0;
    var stampMod = 1;
    existing = 0;
    var basePrice = 300;
    totalPrice = 400;
    var clipCardSave = basePrice * 0.05;
    var clipCardSaveGratis = 300;

    var windowCollection = {
        "priceCollection": {
            "outside": {
                "0": 60,
                "1": 24,
                "2": 32,
                "3": 44,
                "4": 50,
                "5": 50,
                "6": 52,
                "7": 44,
                "8": 62,
                "9": 61,
                "10": 75,
                "11": 75,
                "12": 76,
                "13": 62,
                "14": 75,
                "15": 81,
                "16": 82,
                "17": 123,
                "18": 130,
                "19": 69,
                "20": 100,
                "21": 81,
                "22": 58,
                "23": 42,
                "24": 50,
                "25": 25,
                "26": 50,
                "27": 65,
                "28": 34,
                "29": 65,
                "30": 88,
                "31": 44,
                "32": 75,
                "33": 100,
                "34": 32,
                "35": 60,
                "36": 87,
                "37": 45,
                "38": 75,
                "39": 95,
                "40": 40,
                "41": 70,
                "42": 33,
                "43": 70,
                "44": 106,
                "45": 28,
                "46": 31
            },
            "both": {
                "0": 125,
                "1": 38,
                "2": 50,
                "3": 57,
                "4": 67,
                "5": 75,
                "6": 82,
                "7": 63,
                "8": 88,
                "9": 95,
                "10": 109,
                "11": 114,
                "12": 118,
                "13": 88,
                "14": 118,
                "15": 118,
                "16": 118,
                "17": 137,
                "18": 175,
                "19": 107,
                "20": 142,
                "21": 106,
                "22": 75,
                "23": 57,
                "24": 62,
                "25": 37,
                "26": 64,
                "27": 92,
                "28": 50,
                "29": 82,
                "30": 90,
                "31": 57,
                "32": 100,
                "33": 125,
                "34": 43,
                "35": 82,
                "36": 107,
                "37": 50,
                "38": 108,
                "39": 116,
                "40": 56,
                "41": 90,
                "42": 42,
                "43": 88,
                "44": 138,
                "45": 42,
                "46": 50
            }
        },
        "qtyCollection": {
            "0": {
                "qty": 0
            }, "1": {
                "qty": 0
            }, "2": {
                "qty": 0
            }, "3": {
                "qty":0
            },  "4": {
                "qty": 0
            },  "5": {
                "qty": 0
            },  "6": {
                "qty": 0
            },  "7": {
                "qty": 0
            },  "8": {
                "qty": 0
            },  "9": {
                "qty": 0
            },  "10": {
                "qty": 0
            },  "11": {
                "qty": 0
            },  "12": {
                "qty": 0
            },  "13": {
                "qty": 0
            },  "14": {
                "qty": 0
            },  "15": {
                "qty": 0
            },  "16": {
                "qty": 0
            },  "17": {
                "qty": 0
            },  "18": {
                "qty": 0
            },  "19": {
                "qty": 0
            },  "20": {
                "qty": 0
            },  "21": {
                "qty": 0
            },  "22": {
                "qty": 0
            },  "23": {
                "qty": 0
            },  "24": {
                "qty": 0
            },  "25": {
                "qty": 0
            },  "26": {
                "qty": 0
            },  "27": {
                "qty": 0
            },  "28": {
                "qty": 0
            },  "29": {
                "qty": 0
            },  "30": {
                "qty": 0
            },  "31": {
                "qty": 0
            },  "32": {
                "qty": 0
            },  "33": {
                "qty": 0
            },  "34": {
                "qty": 0
            },  "35": {
                "qty": 0
            },  "36": {
                "qty": 0
            },  "37": {
                "qty": 0
            },  "38": {
                "qty": 0
            },  "39": {
                "qty": 0
            },  "40": {
                "qty": 0
            },  "41": {
                "qty": 0
            },  "42": {
                "qty": 0
            },  "43": {
                "qty": 0
            },  "44": {
                "qty": 0
            },  "45": {
                "qty": 0
            },  "46": {
                "qty": 0
            }

        },
        "nameCollection": {
            "0" : {
                "name": "Custom Special window with:",
                "type": 4,
                "time": 5
            }, "1": {
                "name": "1 fags vindue-1(No complexity)",
                "type": 1,
                "time": 2
            }, "2": {
                "name": "1 fags vindue-2(Small complexity)",
                "type": 1,
                "time": 3
            }, "3": {
                "name": "1 fags vindue-3(Medium complexity)",
                "type": 1,
                "time": 4
            }, "4": {
                "name": "1 fags vindue-4(Medium complexity)",
                "type": 3,
                "time": 4
            }, "5": {
                "name": "1 fags vindue-5(Medium complexity)",
                "type": 1,
                "time": 4
            }, "6": {
                "name": "1 fags vindue-6(Advanced complexity)",
                "type": 1,
                "time": 5
            }, "7": {
                "name": "2 fags vindue-1(No complexity)",
                "type": 2,
                "time": 2
            }, "8": {
                "name": "2 fags vindue-2(Small complexity)",
                "type": 2,
                "time": 3
            }, "9": {
                "name": "2 fags vindue-3(Medium complexity)",
                "type": 2,
                "time": 4
            }, "10": {
                "name": "2 fags vindue-4(Medium complexity)",
                "type": 2,
                "time": 4
            }, "11": {
                "name": "2 fags vindue-5(Advanced complexity)",
                "type": 2,
                "time": 5
            }, "12": {
                "name": "2 fags vindue-6(Advanced complexity)",
                "type": 2,
                "time": 5
            }, "13": {
                "name": "3 fags vindue-1(No complexity)",
                "type": 3,
                "time": 2
            }, "14": {
                "name": "3 fags vindue-2(Small complexity)",
                "type": 3,
                "time": 3
            }, "15": {
                "name": "3 fags vindue-3(Small complexity)",
                "type": 3,
                "time": 3
            }, "16": {
                "name": "3 fags vindue-4(Medium complexity)",
                "type": 3,
                "time": 4
            }, "17": {
                "name": "3 fags vindue-5(Advanced complexity)",
                "type": 3,
                "time": 5
            }, "18": {
                "name": "3 fags vindue-6(Advanced complexity)",
                "type": 3,
                "time": 5
            }, "19": {
                "name": "Special panel window-1(Medium complexity)",
                "type": 4,
                "time": 4
            }, "20": {
                "name": "3 fags vindue-7(Medium complexity)",
                "type": 3,
                "time": 4
            }, "21": {
                "name": "Special panel window-2(Small complexity)",
                "type": 4,
                "time": 3
            }, "22": {
                "name": "Special panel window-3(Medium complexity)",
                "type": 4,
                "time": 4
            }, "23": {
                "name": "Special panel window-4(Small complexity)",
                "type": 4,
                "time": 3
            }, "24": {
                "name": "Special panel window-5(Small complexity)",
                "type": 4,
                "time": 3
            }, "25": {
                "name": "1 fags vindue-7(No complexity)",
                "type": 1,
                "time": 2
            }, "26": {
                "name": "2 fags vindue-7(No complexity)",
                "type": 2,
                "time": 2
            }, "27": {
                "name": "3 fags vindue-8(No complexity)",
                "type": 3,
                "time": 2
            }, "28": {
                "name": "1 fags vindue-8(Small complexity)",
                "type": 1,
                "time": 3
            }, "29": {
                "name": "2 fags vindue-8(Small complexity)",
                "type": 2,
                "time": 3
            }, "30": {
                "name": "3 fags vindue-9(Small complexity)",
                "type": 3,
                "time": 13
            }, "31": {
                "name": "1 fags vindue-9(Medium complexity)",
                "type": 1,
                "time": 4
            }, "32": {
                "name": "2 fags vindue-9(Medium complexity)",
                "type": 2,
                "time": 4
            }, "33": {
                "name": "3 fags vindue-10(Medium complexity)",
                "type": 3,
                "time": 4
            }, "34": {
                "name": "1 fags vindue-10(Advanced complexity)",
                "type": 1,
                "time": 5
            }, "35": {
                "name": "2 fags vindue-10(Advanced complexity)",
                "type": 2,
                "time": 5
            }, "36": {
                "name": "3 fags vindue-11(Advanced complexity)",
                "type": 3,
                "time": 5
            }, "37": {
                "name": "1 fags vindue-11(Medium complexity)",
                "type": 1,
                "time": 4
            }, "38": {
                "name": "2 fags vindue-11(Medium complexity)",
                "type": 2,
                "time": 4
            }, "39": {
                "name": "3 fags vindue-12(Medium complexity)",
                "type": 3,
                "time": 4
            }, "40": {
                "name": "Speciel vindue-6(Medium complexity)",
                "type": 4,
                "time": 4
            }, "41": {
                "name": "Speciel vindue-7(Medium complexity)",
                "type": 4,
                "time": 4
            }, "42": {
                "name": "1 fags vindue-13(Small complexity)",
                "type": 1,
                "time": 3
            }, "43": {
                "name": "2 fags vindue-12(Small complexity)",
                "type": 2,
                "time": 3
            }, "44": {
                "name": "Speciel vindue-9(Medium complexity)",
                "type": 4,
                "time": 4
            }, "45": {
                "name": "Speciel vindue-10(Small complexity)",
                "type": 4,
                "time": 3
            }, "46": {
                "name": "Speciel vindue-11(Small complexity)",
                "type": 3,
                "time": 3
            }
        }
    };

    function getWindowData(window) {
        selectedWindow = $(window).closest(".window");
        windowId = selectedWindow.data("window");
        priceCollection = windowCollection.priceCollection;
        qtyCollection = windowCollection.qtyCollection;
    }

    function forceManualRecalc() {
        $(".price").addClass("calculate");
        $(".price").html("BERÆR PRIS");
    }
    // Recalculate prices
    function recalculate() {
        // $('.remove').remove();
        var finalOrder = {};
        finalOrder.products = [];
        finalOrder.details = [];
        finalOrder.qty = {
            "singlePanel": 0,
            "doublePanel": 0,
            "triplePanel": 0,
            "specialPanel": 0
        };
        totalPrice = 0;
        var totalTime = 0;
        var qtyCollection = windowCollection.qtyCollection;
        var nameCollection = windowCollection.nameCollection;
        var productText = "";

        if (doubleModOn) {
            for (var x in windowCollection.priceCollection.both) {
                var qty = qtyCollection[x].qty;
                if (qty > 0) {
                    var windowPrice = windowCollection.priceCollection.both[x];
                    var fullPrice = windowPrice * qty;
                    if(x == 0) {
                        finalOrder.products.push({
                            "name" : nameCollection[x].name + " Height:" + height + " Width: " + width + " dimmensions",
                            "qty" : qty,
                            "windowprice" : windowPrice,
                            "fullprice" : fullPrice
                        });
                    } else {
                        finalOrder.products.push({
                            "name" : nameCollection[x].name,
                            "qty" : qty,
                            "windowprice" : windowPrice,
                            "fullprice" : fullPrice
                        });
                    }
                    switch(nameCollection[x].type){
                        case 1:
                            finalOrder.qty.singlePanel += qty;
                            break;
                        case 2:
                            finalOrder.qty.doublePanel += qty;
                            break;
                        case 3:
                            finalOrder.qty.triplePanel += qty;
                            break;
                        case 4:
                            finalOrder.qty.specialPanel += qty;
                            break;
                    }
                    totalPrice = totalPrice + fullPrice;
                    totalTime = totalTime + nameCollection[x].time * qty;
                }
                // $(".window[data-window='" + x + "']").append("<div class='remove' style='position: absolute; color: red; font-size: 24px; z-index: 999; bottom: 0;'>Both: "+windowPrice+"DKK</div>")

            }
        } else if (!doubleModOn) {
            for (var x in windowCollection.priceCollection.outside) {
                var qty = qtyCollection[x].qty;
                if (qty > 0) {
                    var windowPrice = windowCollection.priceCollection.outside[x];
                    var fullPrice = windowPrice * qty;
                    if(x == 0) {
                        finalOrder.products.push({
                            "name" : nameCollection[x].name + " Height:" + height + " Width: " + width + " dimmensions",
                            "qty" : qty,
                            "windowprice" : windowPrice,
                            "fullprice" : fullPrice
                        });
                    } else {
                        finalOrder.products.push({
                            "name" : nameCollection[x].name,
                            "qty" : qty,
                            "windowprice" : windowPrice,
                            "fullprice" : fullPrice
                        });
                    }

                    switch(nameCollection[x].type){
                        case 1:
                            finalOrder.qty.singlePanel += qty;
                            break;
                        case 2:
                            finalOrder.qty.doublePanel += qty;
                            break;
                        case 3:
                            finalOrder.qty.triplePanel += qty;
                            break;
                        case 4:
                            finalOrder.qty.specialPanel += qty;
                            break;
                    }
                    totalPrice = totalPrice + fullPrice;
                    totalTime = totalTime + nameCollection[x].time * qty;
                }
                // $(".window[data-window='" + x + "']").append("<div class='remove' style='position: absolute; color: red; font-size: 24px; z-index: 999; bottom: 0;'>Single: "+windowPrice+"DKK</div>");
            }
        }
        if (totalPrice < basePrice) {
            totalPrice = basePrice
        }
        finalOrder.details.totalPrice = totalPrice;
        finalOrder.details.doubleMod = (doubleModOn == false ? 'Kun udvendig' : 'Indvendig og udvendig');
        finalOrder.details.doubleMod2 = (doubleModOn2 == false ? 'Enkelt terrassedør' : 'Dobbelt terrassedør');
        finalOrder.details.existingStamp = (existing == false ? 'Nej' : 'Eksisterende klip(Kontroller gyldigheden)');
        finalOrder.details.stampMod = (stampMod == false ? 'Intet klip' : 'købe klip');


        if (totalPrice == 0) {
            $(".calcualtor-bottom > h4").html("Vælg vinduer for udregning af pris");
        } else {
            $(".calcualtor-bottom > h4").html("du har valgt: "+
                (finalOrder.qty.singlePanel > 0? " " + finalOrder.qty.singlePanel + " 1-fags vinduer <br>": "")+
                (finalOrder.qty.doublePanel > 0? " " + finalOrder.qty.doublePanel + " 2-fags vinduer <br>": "")+
                (finalOrder.qty.triplePanel > 0? " " + finalOrder.qty.triplePanel + " 3-fags vinduer <br>": "")+
                (finalOrder.qty.specialPanel > 0? " " + finalOrder.qty.specialPanel + " Special vinduer <br>": "")+
                "Og din pris for vinduespudsning er:");
        }
        if(doubleModOn2 == true) {
            totalPrice = totalPrice * 1.5;
            totalTime = totalTime * 1.75;
        }
        if (doubleModOn == true) {
            totalTime = totalTime * 1.5;
        }
        if(stampMod) {
            totalPrice = totalPrice + 100;
        }
        if(totalTime > 0){
            $(".minutes").html("Rengørings tid: " + totalTime + "Min");
        } else {
            $(".minutes").html("");
        }
        $(".mods").html((doubleModOn || doubleModOn2 || stampMod? " i prisen inkluderet: <br>": "")+
            (doubleModOn? " *begge sider vaskes<br>": "")+
            (doubleModOn2? " *pudsning forsatsvinduer <br>og tilbage vinduer": "")+
            (stampMod? " *klippekort": ""));
        // $(".calcualtor-bottom > .price").html(totalPrice+"DKK");
        forceManualRecalc();

        var arrayLength = finalOrder.products.length;
        for (var x in finalOrder.products) {
            if (x <= arrayLength) {
                var count = Number(x) + 1;
                productText = productText + "\\\n" + count + ") " +
                    "Navn: "+ finalOrder.products[x].name +
                    ", Pris per vindue: " + finalOrder.products[x]['windowprice'] +
                    ", Antal: "+ finalOrder.products[x]['qty'] +
                    ", Pris ialt: "+ finalOrder.products[x]['fullprice'];
            }
        }
        clipCardSave = Math.floor((totalPrice * 0.05) * 100) / 100;
        clipCardSaveGratis = Math.floor(totalPrice * 10) / 10;
        $("#textarea-yui_3_17_2_1_1530877888783_52766-field").val(productText);
        $("input[name='SQF_EXISTING_LOYALTY_STAMP']").val((finalOrder.details.existingStamp));
        $("input[name='SQF_BOTH_SIDE']").val((finalOrder.details.doubleMod));
        $("input[name='SQF_TIME_TO_CLEAN']").val(("Rengørings tid: " + totalTime + "Min"));
        $("input[name='SQF_DOUBLE_WINDOW']").val((finalOrder.details.doubleMod2));
        $("input[name='SQF_BUYING_LOYALTY_STAMP']").val((finalOrder.details.stampMod));
        $("input[name='SQF_TOTAL_PRICE']").val(totalPrice + "DKK");
    }

    // Apply outside or both modifier
    $(".double-mod").click(function(){
        doubleModOn = $(this).data("enabled");
        if (!doubleModOn) {
            doubleModOn = 1;
            $(this).removeClass("no");
            $(this).data("enabled", doubleModOn);
            $(this).html("Ja");
        } else if (doubleModOn) {
            doubleModOn = 0;
            $(this).addClass("no");
            $(this).data("enabled", doubleModOn);
            $(this).html("Nej");
        }
        // windowPrices
        forceManualRecalc();
        recalculate();
    });

    // Apply double mod modifier
    $(".double-mod-2").click(function(){
        doubleModOn2 = $(this).data("enabled");
        if (!doubleModOn2) {
            doubleModOn2 = 1;
            $(this).removeClass("no");
            $(this).data("enabled", doubleModOn2);
            $(this).html("Ja");
        } else if (doubleModOn2) {
            doubleModOn2 = 0;
            $(this).addClass("no");
            $(this).data("enabled", doubleModOn2);
            $(this).html("Nej");
        }
        // windowPrices
        forceManualRecalc();
        recalculate();
    });

    //Apply for existing loyalty stamp
    $(".existing-clipcard-mod").click(function(){
        existing = $(this).data("enabled");
        if (!existing) {
            existing = 1;
            stampMod = 0;
            $(".stamp-mod").data("enabled", 0);
            $(".stamp-mod").html("Nej");
            $(".stamp-mod").addClass("unclickable");
            $(".stamp-mod").addClass("no");
            $(this).removeClass("no");
            $(this).data("enabled", existing);
            $(this).html("Ja");
        } else if (existing) {
            existing = 0;
            stampMod = 1;
            $(".stamp-mod").data("enabled", 1);
            $(".stamp-mod").html("Ja");
            $(".stamp-mod").removeClass("unclickable");
            $(".stamp-mod").removeClass("no");
            $(this).addClass("no");
            $(this).data("enabled", existing);
            $(this).html("Nej");
        }
        // windowPrices
        forceManualRecalc();
        recalculate();
    });
    //Add qty for window
    $(".w-plus, .image-holder").click(function () {

        getWindowData(this);
        if (windowId == 0) {
            height = $("#special-height").val();
            width = $("#special-width").val();
            if(height < 1 || width < 1) {
                return;
            }
        }
        qtyCollection[windowId].qty++;
        var qty = qtyCollection[windowId].qty;
        if (qty > 0) {
            $(selectedWindow).find(".qty").html(qty);
            $(selectedWindow).find(".qty").removeClass("hidden");
            $(this).closest(".window").addClass("selected");
        }
        // windowPrices
        forceManualRecalc();
        recalculate();
    });

    $(".stamp-mod").click(function(){
        stampMod = $(this).data("enabled");
        if (!stampMod) {
            stampMod = 1;
            $(this).removeClass("no");
            $(this).data("enabled", stampMod);
            $(this).html("Ja");
        } else if (stampMod) {
            stampMod = 0;
            $(this).addClass("no");
            $(this).data("enabled", stampMod);
            $(this).html("Nej");
        }
        // windowPrices
        forceManualRecalc();
        recalculate();
    });

    //Remove qty for window
    $(".w-minus").click(function () {

        getWindowData(this);
        if (qtyCollection[windowId].qty > 0) {
            qtyCollection[windowId].qty--;
            var qty = qtyCollection[windowId].qty;
            if (qty == 0) {
                $(selectedWindow).find(".qty").html(qty);
                $(selectedWindow).find(".qty").addClass("hidden");
                $(this).closest(".window").removeClass("selected");
            } else {
                $(selectedWindow).find(".qty").html(qty);
            }
            // windowPrices
            forceManualRecalc();
            recalculate();
        }
    });

    $(".calculate").click(function() {
        var percent = 0;
        $(".calculator-wrap, .window-wrap, .button-container, .stamp-container").addClass("unclickable");
        interval = setInterval(function(){
            percent = percent + 3;
            $(".price").html("Loading "+ percent +"%");
            if(percent >= 99) {
                clearInterval(interval);
                $(".calculator-wrap, .window-wrap, .button-container, .stamp-container").removeClass("unclickable");
                $(".price").removeClass("calculate");
                $(".price").html(totalPrice+"DKK");
            }
        }, 75 );
    });


    //control category opening
    $(".section-heading").click(function (){
        var category = $(this).closest(".section").find(".window-container");
        var arrow = $(this).find(".arrow");
        if(category.hasClass("closed")) {
            category.show( function(){
                category.css("display", "flex");
                category.removeClass("closed");
            });
            arrow.addClass("down");
        } else {
            $(category).hide( function(){
                category.addClass("closed");
            });
            arrow.removeClass("down");
        }
    });


    // Show Window Ids for employees

    $(".window").mousedown(function(e){
        if(e.which == 2) {
            $(this).find(".window-id").show();
        }
        return true;// to allow the browser to know that we handled it.
    });
    //Loaylty Stamps po up
    $('.stamp').magnificPopup({
        items: {
            src: $('<div class="white-popup">'+
                '<div class="clip-image"></div>'+
                '<div class="description-wrap">'+
                '<div class="column col1">' +
                '<h5>Hvordan bruges det?</h5>'+
                '<p>Køb klippekort for 100,- kr og spar penge</p>'+
                '<p>Når du har valgt vinduer, klik ja for køb af klippekort nederst på siden</p>'+
                '<p>Dit klippekort vil blive tilknyttet din adresse og du vil opnå rabat for hver vinduespudsning</p>'+
                '<p>in sjette vinduespudsning er gratis</p>'+
                '<p>Har du allerede klippekort? - klik " Har klippekort " øverst på siden</p>'+
                '<p>Kontakt os hvis du har spørgsmål til klippekort eller vinduespudsning</p>'+
                '</div>'+
                '<div class="column col2">' +
                '<h5>Fordele</h5>'+
                '<p>Spar penge hver gang du får pudset vinduer</p>'+
                '<p>Få 5% rabat på de første fem vinduespudsninger\n</p>'+
                '<p>Sjette vinduespudsning er gratis</p>'+
                '<p>Bliv fast kunde og få super tilbud fremover</p>'+
                '</div>'+
                '</div>'+
                '<div class="savings">'+
                '<h5>Din besparelse ved køb af klippekort</h5>'+
                '<div class="calc-wrap">'+
                '<div class="cell regular">'+
                '<div class="day-name">første gang</div>'+
                '<div class="regular-discount">-'+clipCardSave+'kr</div>'+
                '</div>'+
                '<div class="cell regular">'+
                '<div class="day-name">anden gang</div>'+
                '<div class="regular-discount">-'+clipCardSave+'kr</div>'+
                '</div>'+
                '<div class="cell regular">'+
                '<div class="day-name">tredje gang</div>'+
                '<div class="regular-discount">-'+clipCardSave+'kr</div>'+
                '</div>'+
                '<div class="cell regular">'+
                '<div class="day-name">fjerde gang</div>'+
                '<div class="regular-discount">-'+clipCardSave+'kr</div>'+
                '</div>'+
                '<div class="cell regular">'+
                '<div class="day-name">femte gang</div>'+
                '<div class="regular-discount">-'+clipCardSave+'kr</div>'+
                '</div>'+
                '<div class="cell free">'+
                '<div class="day-name">sjette gang</div>'+
                '<div class="regular-discount">GRATIS</div>'+
                '</div>'+
                '<div class="cell total">'+
                '<div class="total-savings">Spar '+((clipCardSave*5)+clipCardSaveGratis)+'kr</div>'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>'),
            type: 'inline'
        }
    });
    $('.stamp').on('mfpOpen', function() {
        $(".white-popup").html('<div class="clip-image"></div>'+
            '<div class="description-wrap">'+
            '<div class="column col1">' +
            '<h5>Hvordan bruges det?</h5>'+
            '<p>Køb klippekort for 100kr og spar penge</p>'+
            '<p>Når du har valgt vinduer, klik ja for køb af klippekort nederst på siden</p>'+
            '<p>Dit klippekort vil blive tilknyttet din adresse og du vil opnå rabat for hver vinduespudsning</p>'+
            '<p>in sjette vinduespudsning er gratis</p>'+
            '<p>Har du allerede klippekort? - klik " Har klippekort " øverst på siden</p>'+
            '<p>Kontakt os hvis du har spørgsmål til klippekort eller vinduespudsning</p>'+
            '</div>'+
            '<div class="column col2">' +
            '<h5>Fordele</h5>'+
            '<p>Spar penge hver gang du får pudset vinduer</p>'+
            '<p>Få 5% rabat på de første fem vinduespudsninger\n</p>'+
            '<p>Sjette vinduespudsning er gratis</p>'+
            '<p>Bliv fast kunde og få super tilbud fremover</p>'+
            '</div>'+
            '</div>'+
            '<div class="savings">'+
            '<h5>Din besparelse ved køb af klippekort</h5>'+
            '<div class="calc-wrap">'+
            '<div class="cell regular">'+
            '<div class="day-name">første gang</div>'+
            '<div class="regular-discount">-'+clipCardSave+'kr</div>'+
            '</div>'+
            '<div class="cell regular">'+
            '<div class="day-name">anden gang</div>'+
            '<div class="regular-discount">-'+clipCardSave+'kr</div>'+
            '</div>'+
            '<div class="cell regular">'+
            '<div class="day-name">tredje gang</div>'+
            '<div class="regular-discount">-'+clipCardSave+'kr</div>'+
            '</div>'+
            '<div class="cell regular">'+
            '<div class="day-name">fjerde gang</div>'+
            '<div class="regular-discount">-'+clipCardSave+'kr</div>'+
            '</div>'+
            '<div class="cell regular">'+
            '<div class="day-name">femte gang</div>'+
            '<div class="regular-discount">-'+clipCardSave+'kr</div>'+
            '</div>'+
            '<div class="cell free">'+
            '<div class="day-name">sjette gang</div>'+
            '<div class="regular-discount">GRATIS</div>'+
            '</div>'+
            '<div class="cell total">'+
            '<div class="total-savings">Spar '+((clipCardSave*5)+clipCardSaveGratis)+'kr</div>'+
            '</div>'+
            '</div>'+
            '</div>');
    });
});