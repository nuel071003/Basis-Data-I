/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {

    $('#bankppk').change(function () {
        var bank = $('#bankppk').val();
        if (bank == 'PNB') {
            $('#norekppk').val('PNBP');
            $('#nmrekppk').val('PNBP');
            $('#norekppk').attr("readonly", true);
            $('#nmrekppk').attr("readonly", true);
        } else {
            $('#norekppk').val('');
            $('#nmrekppk').val('');
            $('#norekppk').attr("readonly", false);
            $('#nmrekppk').attr("readonly", false);
        }
    });

    $('.nik').keypress(function (e) {
//        var e = evt || window.event; // for trans-browser compatibility
        var charCode = e.which || e.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        if (e.shiftKey)
            return false;
        return true;
    });

    $('.num').keypress(function (e) {
        var charCode = e.which || e.keyCode;
        if ((charCode > 45 && charCode < 58) || charCode == 8 || charCode == 9) {
            return true;
        }
        return false;
    });

    $('.latlng').keypress(function (e) {
        var charCode = e.which || e.keyCode;
        if ((charCode >= 45 && charCode < 58) || charCode == 8 ||
                charCode == 9 || charCode == 13 ||
                charCode == 190 || charCode == 188 || charCode == 222) {
            return true;
        }
        return false;
    });

    var counterSenin = 1;
    var counterSelasa = 1;
    var counterRabu = 1;
    var counterKamis = 1;
    var counterJumat = 1;
    var counterSabtu = 1;
    var counterMinggu = 1;
    var counterLibur = 1;
    $('.clockpicker').clockpicker();
    // Senin
    $("#btnSenPlus").click(function () {
        if (counterSenin > 2) {
            alert("Cukup 3 Jadwal Saja...");
            return false;
        }
        var newTextBoxDiv = $(document.createElement('div'))
                .attr("id", 'TextBoxDivSenin' + counterSenin);

        newTextBoxDiv.after().html('<div class="col-sm-5"></div><div class="col-sm-3"><div class="input-group clockpicker" data-autoclose="true" style="margin-bottom: 5px">' +
                '<input id="bSenin' + counterSenin + '" type="text" class="form-control input-sm" value="08:00" name="bSenin[]" readonly="">' +
                '<span class="input-group-addon">' +
                '<span class="glyphicon glyphicon-time"></span>' +
                '</span>' +
                '</div>' +
                '<div id="notbSenin"></div>' +
                '</div>' +
                '<div class="col-sm-3"><div class="input-group clockpicker" data-autoclose="true" style="margin-bottom: 5px">' +
                '<input id="tSenin' + counterSenin + '" type="text" class="form-control input-sm" value="17:00" name="tSenin[]" readonly="">' +
                '<span class="input-group-addon">' +
                '<span class="glyphicon glyphicon-time"></span>' +
                '</span>' +
                '</div>' +
                '<div id="nottSenin"></div>' +
                '</div>' +
                '<script type="text/javascript">' +
                '$(".clockpicker").clockpicker();' +
                '</script>');

        newTextBoxDiv.appendTo("#TextBoxesGroupSenin");
        counterSenin++;
    });

    $("#btnSenMin").click(function () {
        if (counterSenin == 1) {
            alert("Minimal harus ada 1 jadwal, jika libur klik tombol libur.");
            return false;
        }
        counterSenin--;
        $("#TextBoxDivSenin" + counterSenin).remove();
    });

    $("#btnSenHL").click(function () {
        alert("Anda Libur di hari Senin.");
        if (counterSenin == 1) {
            setNullSen();
            return false;
        }
        counterSenin--;
        $("#TextBoxDivSenin" + counterSenin).remove();
        setNullSen();
    });

    function setNullSen() {
        $("#bSenin").val("");
        $("#tSenin").val("");
        $("#bSenin1").val("");
        $("#tSenin1").val("");
        $("#bSenin2").val("");
        $("#tSenin2").val("");
    }

    $("#btnSen24").click(function () {
        alert("Anda buka 24 jam di hari Senin.");
        if (counterSenin == 1) {
            setDuaEmpatSen();
            return false;
        }
        counterSenin--;
        $("#TextBoxDivSenin" + counterSenin).remove();
        setDuaEmpatSen();
    });

    function setDuaEmpatSen() {
        $("#bSenin").val("00:00");
        $("#tSenin").val("23:59");
        $("#bSenin1").val("00:00");
        $("#tSenin1").val("23:59");
        $("#bSenin2").val("00:00");
        $("#tSenin2").val("23:59");
    }

    // Selasa
    $("#btnSelPlus").click(function () {
        if (counterSelasa > 2) {
            alert("Cukup 3 Jadwal Saja...");
            return false;
        }
        var newTextBoxDiv = $(document.createElement('div'))
                .attr("id", 'TextBoxDivSelasa' + counterSelasa);

        newTextBoxDiv.after().html('<div class="col-sm-5"></div><div class="col-sm-3"><div class="input-group clockpicker" data-autoclose="true" style="margin-bottom: 5px">' +
                '<input id="bSelasa' + counterSelasa + '" type="text" class="form-control input-sm" value="08:00" name="bSelasa[]" readonly="">' +
                '<span class="input-group-addon">' +
                '<span class="glyphicon glyphicon-time"></span>' +
                '</span>' +
                '</div>' +
                '<div id="notbSelasa"></div>' +
                '</div>' +
                '<div class="col-sm-3"><div class="input-group clockpicker" data-autoclose="true" style="margin-bottom: 5px">' +
                '<input id="tSelasa' + counterSelasa + '" type="text" class="form-control input-sm" value="17:00" name="tSelasa[]" readonly="">' +
                '<span class="input-group-addon">' +
                '<span class="glyphicon glyphicon-time"></span>' +
                '</span>' +
                '</div>' +
                '<div id="nottSelasa"></div>' +
                '</div>' +
                '<script type="text/javascript">' +
                '$(".clockpicker").clockpicker();' +
                '</script>');

        newTextBoxDiv.appendTo("#TextBoxesGroupSelasa");
        counterSelasa++;
    });

    $("#btnSelMin").click(function () {
        if (counterSelasa == 1) {
            alert("Minimal harus ada 1 jadwal, jika libur klik tombol libur.");
            return false;
        }
        counterSelasa--;
        $("#TextBoxDivSelasa" + counterSelasa).remove();
    });

    $("#btnSelHL").click(function () {
        alert("Anda Libur di hari Selasa.");
        if (counterSelasa == 1) {
            setNullSel();
            return false;
        }
        counterSelasa--;
        $("#TextBoxDivSelasa" + counterSelasa).remove();
        setNullSel();
    });

    function setNullSel() {
        $("#bSelasa").val("");
        $("#tSelasa").val("");
        $("#bSelasa1").val("");
        $("#tSelasa1").val("");
        $("#bSelasa2").val("");
        $("#tSelasa2").val("");
    }

    $("#btnSel24").click(function () {
        alert("Anda buka 24 jam di hari Selasa.");
        if (counterSelasa == 1) {
            setDuaEmpatSel();
            return false;
        }
        counterSelasa--;
        $("#TextBoxDivSelasa" + counterSelasa).remove();
        setDuaEmpatSel();
    });

    function setDuaEmpatSel() {
        $("#bSelasa").val("00:00");
        $("#tSelasa").val("23:59");
        $("#bSelasa1").val("00:00");
        $("#tSelasa1").val("23:59");
        $("#bSelasa2").val("00:00");
        $("#tSelasa2").val("23:59");
    }

    // Rabu
    $("#btnRabPlus").click(function () {
        if (counterRabu > 2) {
            alert("Cukup 3 Jadwal Saja...");
            return false;
        }
        var newTextBoxDiv = $(document.createElement('div'))
                .attr("id", 'TextBoxDivRabu' + counterRabu);

        newTextBoxDiv.after().html('<div class="col-sm-5"></div><div class="col-sm-3"><div class="input-group clockpicker" data-autoclose="true" style="margin-bottom: 5px">' +
                '<input id="bRabu' + counterRabu + '" type="text" class="form-control input-sm" value="08:00" name="bRabu[]" readonly="">' +
                '<span class="input-group-addon">' +
                '<span class="glyphicon glyphicon-time"></span>' +
                '</span>' +
                '</div>' +
                '<div id="notbRabu"></div>' +
                '</div>' +
                '<div class="col-sm-3"><div class="input-group clockpicker" data-autoclose="true" style="margin-bottom: 5px">' +
                '<input id="tRabu' + counterSelasa + '" type="text" class="form-control input-sm" value="17:00" name="tRabu[]" readonly="">' +
                '<span class="input-group-addon">' +
                '<span class="glyphicon glyphicon-time"></span>' +
                '</span>' +
                '</div>' +
                '<div id="nottRabu"></div>' +
                '</div>' +
                '<script type="text/javascript">' +
                '$(".clockpicker").clockpicker();' +
                '</script>');

        newTextBoxDiv.appendTo("#TextBoxesGroupRabu");
        counterRabu++;
    });

    $("#btnRabMin").click(function () {
        if (counterRabu == 1) {
            alert("Minimal harus ada 1 jadwal, jika libur klik tombol libur.");
            return false;
        }
        counterRabu--;
        $("#TextBoxDivRabu" + counterRabu).remove();
    });

    $("#btnRabHL").click(function () {
        alert("Anda Libur di hari Rabu.");
        if (counterRabu == 1) {
            setNullRab();
            return false;
        }
        counterRabu--;
        $("#TextBoxDivRabu" + counterRabu).remove();
        setNullRab();
    });

    function setNullRab() {
        $("#bRabu").val("");
        $("#tRabu").val("");
        $("#bRabu1").val("");
        $("#tRabu1").val("");
        $("#bRabu2").val("");
        $("#tRabu2").val("");
    }

    $("#btnRab24").click(function () {
        alert("Anda buka 24 jam di hari Rabu.");
        if (counterRabu == 1) {
            setDuaEmpatRab();
            return false;
        }
        counterRabu--;
        $("#TextBoxDivRabu" + counterRabu).remove();
        setDuaEmpatRab();
    });

    function setDuaEmpatRab() {
        $("#bRabu").val("00:00");
        $("#tRabu").val("23:59");
        $("#bRabu1").val("00:00");
        $("#tRabu1").val("23:59");
        $("#bRabu2").val("00:00");
        $("#tRabu2").val("23:59");
    }

    // Kamis
    $("#btnKamPlus").click(function () {
        if (counterKamis > 2) {
            alert("Cukup 3 Jadwal Saja...");
            return false;
        }
        var newTextBoxDiv = $(document.createElement('div'))
                .attr("id", 'TextBoxDivKamis' + counterKamis);

        newTextBoxDiv.after().html('<div class="col-sm-5"></div><div class="col-sm-3"><div class="input-group clockpicker" data-autoclose="true" style="margin-bottom: 5px">' +
                '<input id="bKamis' + counterKamis + '" type="text" class="form-control input-sm" value="08:00" name="bKamis[]" readonly="">' +
                '<span class="input-group-addon">' +
                '<span class="glyphicon glyphicon-time"></span>' +
                '</span>' +
                '</div>' +
                '<div id="notbKamis"></div>' +
                '</div>' +
                '<div class="col-sm-3"><div class="input-group clockpicker" data-autoclose="true" style="margin-bottom: 5px">' +
                '<input id="tKamis' + counterKamis + '" type="text" class="form-control input-sm" value="17:00" name="tKamis[]" readonly="">' +
                '<span class="input-group-addon">' +
                '<span class="glyphicon glyphicon-time"></span>' +
                '</span>' +
                '</div>' +
                '<div id="nottKamis"></div>' +
                '</div>' +
                '<script type="text/javascript">' +
                '$(".clockpicker").clockpicker();' +
                '</script>');

        newTextBoxDiv.appendTo("#TextBoxesGroupKamis");
        counterKamis++;
    });

    $("#btnKamMin").click(function () {
        if (counterKamis == 1) {
            alert("Minimal harus ada 1 jadwal, jika libur klik tombol libur.");
            return false;
        }
        counterKamis--;
        $("#TextBoxDivKamis" + counterKamis).remove();
    });

    $("#btnKamHL").click(function () {
        alert("Anda Libur di hari Kamis.");
        if (counterKamis == 1) {
            setNullKam();
            return false;
        }
        counterKamis--;
        $("#TextBoxDivKamis" + counterKamis).remove();
        setNullKam();
    });

    function setNullKam() {
        $("#bKamis").val("");
        $("#tKamis").val("");
        $("#bKamis1").val("");
        $("#tKamis1").val("");
        $("#bKamis2").val("");
        $("#tKamis2").val("");
    }

    $("#btnKam24").click(function () {
        alert("Anda buka 24 jam di hari Kamis.");
        if (counterKamis == 1) {
            setDuaEmpatKam();
            return false;
        }
        counterKamis--;
        $("#TextBoxDivKamis" + counterKamis).remove();
        setDuaEmpatKam();
    });

    function setDuaEmpatKam() {
        $("#bKamis").val("00:00");
        $("#tKamis").val("23:59");
        $("#bKamis1").val("00:00");
        $("#tKamis1").val("23:59");
        $("#bKamis2").val("00:00");
        $("#tKamis2").val("23:59");
    }

    // Jumat
    $("#btnJumPlus").click(function () {
        if (counterJumat > 2) {
            alert("Cukup 3 Jadwal Saja...");
            return false;
        }
        var newTextBoxDiv = $(document.createElement('div'))
                .attr("id", 'TextBoxDivJumat' + counterJumat);

        newTextBoxDiv.after().html('<div class="col-sm-5"></div><div class="col-sm-3"><div class="input-group clockpicker" data-autoclose="true" style="margin-bottom: 5px">' +
                '<input id="bJumat' + counterJumat + '" type="text" class="form-control input-sm" value="08:00" name="bJumat[]" readonly="">' +
                '<span class="input-group-addon">' +
                '<span class="glyphicon glyphicon-time"></span>' +
                '</span>' +
                '</div>' +
                '<div id="notbJumat"></div>' +
                '</div>' +
                '<div class="col-sm-3"><div class="input-group clockpicker" data-autoclose="true" style="margin-bottom: 5px">' +
                '<input id="tJumat' + counterSelasa + '" type="text" class="form-control input-sm" value="17:00" name="tJumat[]" readonly="">' +
                '<span class="input-group-addon">' +
                '<span class="glyphicon glyphicon-time"></span>' +
                '</span>' +
                '</div>' +
                '<div id="nottJumat"></div>' +
                '</div>' +
                '<script type="text/javascript">' +
                '$(".clockpicker").clockpicker();' +
                '</script>');

        newTextBoxDiv.appendTo("#TextBoxesGroupJumat");
        counterJumat++;
    });

    $("#btnJumMin").click(function () {
        if (counterJumat == 1) {
            alert("Minimal harus ada 1 jadwal, jika libur klik tombol libur.");
            return false;
        }
        counterJumat--;
        $("#TextBoxDivJumat" + counterJumat).remove();
    });

    $("#btnJumHL").click(function () {
        alert("Anda Libur di hari Jumat.");
        if (counterJumat == 1) {
            setNullJum();
            return false;
        }
        counterJumat--;
        $("#TextBoxDivJumat" + counterJumat).remove();
        setNullJum();
    });

    function setNullJum() {
        $("#bJumat").val("");
        $("#tJumat").val("");
        $("#bJumat1").val("");
        $("#tJumat1").val("");
        $("#bJumat2").val("");
        $("#tJumat2").val("");
    }

    $("#btnJum24").click(function () {
        alert("Anda buka 24 jam di hari Jumat.");
        if (counterJumat == 1) {
            setDuaEmpatJum();
            return false;
        }
        counterJumat--;
        $("#TextBoxDivJumat" + counterJumat).remove();
        setDuaEmpatJum();
    });

    function setDuaEmpatJum() {
        $("#bJumat").val("00:00");
        $("#tJumat").val("23:59");
        $("#bJumat1").val("00:00");
        $("#tJumat1").val("23:59");
        $("#bJumat2").val("00:00");
        $("#tJumat2").val("23:59");
    }

    // Sabtu
    $("#btnSabPlus").click(function () {
        if (counterSabtu > 2) {
            alert("Cukup 3 Jadwal Saja...");
            return false;
        }
        var newTextBoxDiv = $(document.createElement('div'))
                .attr("id", 'TextBoxDivSabtu' + counterSabtu);

        newTextBoxDiv.after().html('<div class="col-sm-5"></div><div class="col-sm-3"><div class="input-group clockpicker" data-autoclose="true" style="margin-bottom: 5px">' +
                '<input id="bSabtu' + counterSabtu + '" type="text" class="form-control input-sm" value="08:00" name="bSabtu[]" readonly="">' +
                '<span class="input-group-addon">' +
                '<span class="glyphicon glyphicon-time"></span>' +
                '</span>' +
                '</div>' +
                '<div id="notbSabtu"></div>' +
                '</div>' +
                '<div class="col-sm-3"><div class="input-group clockpicker" data-autoclose="true" style="margin-bottom: 5px">' +
                '<input id="tSabtu' + counterSabtu + '" type="text" class="form-control input-sm" value="17:00" name="tSabtu[]" readonly="">' +
                '<span class="input-group-addon">' +
                '<span class="glyphicon glyphicon-time"></span>' +
                '</span>' +
                '</div>' +
                '<div id="nottSabtu"></div>' +
                '</div>' +
                '<script type="text/javascript">' +
                '$(".clockpicker").clockpicker();' +
                '</script>');

        newTextBoxDiv.appendTo("#TextBoxesGroupSabtu");
        counterSabtu++;
    });

    $("#btnSabMin").click(function () {
        if (counterSabtu == 1) {
            alert("Minimal harus ada 1 jadwal, jika libur klik tombol libur.");
            return false;
        }
        counterSabtu--;
        $("#TextBoxDivSabtu" + counterSabtu).remove();
    });

    $("#btnSabHL").click(function () {
        alert("Anda Libur di hari Sabtu.");
        if (counterSabtu == 1) {
            setNullSab();
            return false;
        }
        counterSabtu--;
        $("#TextBoxDivSabtu" + counterSabtu).remove();
        setNullSab();
    });

    function setNullSab() {
        $("#bSabtu").val("");
        $("#tSabtu").val("");
        $("#bSabtu1").val("");
        $("#tSabtu1").val("");
        $("#bSabtu2").val("");
        $("#tSabtu2").val("");
    }

    $("#btnSab24").click(function () {
        alert("Anda Libur di hari Sabtu.");
        if (counterSabtu == 1) {
            setDuaEmpatSab();
            return false;
        }
        counterSabtu--;
        $("#TextBoxDivSabtu" + counterSabtu).remove();
        setDuaEmpatSab();
    });

    function setDuaEmpatSab() {
        $("#bSabtu").val("00:00");
        $("#tSabtu").val("23:59");
        $("#bSabtu1").val("00:00");
        $("#tSabtu1").val("23:59");
        $("#bSabtu2").val("00:00");
        $("#tSabtu2").val("23:59");
    }

    // Minggu
    $("#btnMinPlus").click(function () {
        if (counterMinggu > 2) {
            alert("Cukup 3 Jadwal Saja...");
            return false;
        }
        var newTextBoxDiv = $(document.createElement('div'))
                .attr("id", 'TextBoxDivMinggu' + counterMinggu);

        newTextBoxDiv.after().html('<div class="col-sm-5"></div><div class="col-sm-3"><div class="input-group clockpicker" data-autoclose="true" style="margin-bottom: 5px">' +
                '<input id="bMinggu' + counterMinggu + '" type="text" class="form-control input-sm" value="08:00" name="bMinggu[]" readonly="">' +
                '<span class="input-group-addon">' +
                '<span class="glyphicon glyphicon-time"></span>' +
                '</span>' +
                '</div>' +
                '<div id="notbMinggu"></div>' +
                '</div>' +
                '<div class="col-sm-3"><div class="input-group clockpicker" data-autoclose="true" style="margin-bottom: 5px">' +
                '<input id="tMinggu' + counterMinggu + '" type="text" class="form-control input-sm" value="17:00" name="tMinggu[]" readonly="">' +
                '<span class="input-group-addon">' +
                '<span class="glyphicon glyphicon-time"></span>' +
                '</span>' +
                '</div>' +
                '<div id="nottMinggu"></div>' +
                '</div>' +
                '<script type="text/javascript">' +
                '$(".clockpicker").clockpicker();' +
                '</script>');

        newTextBoxDiv.appendTo("#TextBoxesGroupMinggu");
        counterMinggu++;
    });

    $("#btnMinMin").click(function () {
        if (counterMinggu == 1) {
            alert("Minimal harus ada 1 jadwal, jika libur klik tombol libur.");
            return false;
        }
        counterMinggu--;
        $("#TextBoxDivMinggu" + counterMinggu).remove();
    });

    $("#btnMinHL").click(function () {
        alert("Anda Libur di hari Minggu.");
        if (counterMinggu == 1) {
            setNullMin();
            return false;
        }
        counterMinggu--;
        $("#TextBoxDivMinggu" + counterMinggu).remove();
        setNullMin();
    });

    function setNullMin() {
        $("#bMinggu").val("");
        $("#tMinggu").val("");
        $("#bMinggu1").val("");
        $("#tMinggu1").val("");
        $("#bMinggu2").val("");
        $("#tMinggu2").val("");
    }

    $("#btnMin24").click(function () {
        alert("Anda buka 24 jam di hari Minggu.");
        if (counterMinggu == 1) {
            setDuaEmpatMin();
            return false;
        }
        counterMinggu--;
        $("#TextBoxDivMinggu" + counterMinggu).remove();
        setDuaEmpatMin();
    });

    function setDuaEmpatMin() {
        $("#bMinggu").val("00:00");
        $("#tMinggu").val("23:59");
        $("#bMinggu1").val("00:00");
        $("#tMinggu1").val("23:59");
        $("#bMinggu2").val("00:00");
        $("#tMinggu2").val("23:59");
    }

    // Libur
    $("#btnLibPlus").click(function () {
        if (counterLibur > 2) {
            alert("Cukup 3 Jadwal Saja...");
            return false;
        }
        var newTextBoxDiv = $(document.createElement('div'))
                .attr("id", 'TextBoxDivLibur' + counterLibur);

        newTextBoxDiv.after().html('<div class="col-sm-5"></div><div class="col-sm-3"><div class="input-group clockpicker" data-autoclose="true" style="margin-bottom: 5px">' +
                '<input id="bLibur' + counterLibur + '" type="text" class="form-control input-sm" value="08:00" name="bLibur[]" readonly="">' +
                '<span class="input-group-addon">' +
                '<span class="glyphicon glyphicon-time"></span>' +
                '</span>' +
                '</div>' +
                '<div id="notbLibur"></div>' +
                '</div>' +
                '<div class="col-sm-3"><div class="input-group clockpicker" data-autoclose="true" style="margin-bottom: 5px">' +
                '<input id="tLibur' + counterLibur + '" type="text" class="form-control input-sm" value="17:00" name="tLibur[]" readonly="">' +
                '<span class="input-group-addon">' +
                '<span class="glyphicon glyphicon-time"></span>' +
                '</span>' +
                '</div>' +
                '<div id="nottLibur"></div>' +
                '</div>' +
                '<script type="text/javascript">' +
                '$(".clockpicker").clockpicker();' +
                '</script>');

        newTextBoxDiv.appendTo("#TextBoxesGroupLibur");
        counterLibur++;
    });

    $("#btnLibMin").click(function () {
        if (counterLibur == 1) {
            alert("Minimal harus ada 1 jadwal, jika libur klik tombol libur.");
            return false;
        }
        counterLibur--;
        $("#TextBoxDivLibur" + counterLibur).remove();
    });

    $("#btnLibHL").click(function () {
        alert("Anda Libur di hari Libur Nasional.");
        if (counterLibur == 1) {
            setNullLib();
            return false;
        }
        counterLibur--;
        $("#TextBoxDivLibur" + counterLibur).remove();
        setNullLib();
    });

    function setNullLib() {
        $("#bLibur").val("");
        $("#tLibur").val("");
        $("#bLibur1").val("");
        $("#tLibur1").val("");
        $("#bLibur2").val("");
        $("#tLibur2").val("");
    }

    $("#btnLib24").click(function () {
        alert("Anda buka 24 jam di hari Libur Nasional.");
        if (counterLibur == 1) {
            setDuaEmpatLib();
            return false;
        }
        counterLibur--;
        $("#TextBoxDivLibur" + counterLibur).remove();
        setDuaEmpatLib();
    });

    function setDuaEmpatLib() {
        $("#bLibur").val("00:00");
        $("#tLibur").val("23:59");
        $("#bLibur1").val("00:00");
        $("#tLibur1").val("23:59");
        $("#bLibur2").val("00:00");
        $("#tLibur2").val("23:59");
    }
});

$('select').select2({placeholder: "--Pilih--", allowClear: true});

$('.tgl').datepicker({
    autoclose: true,
    format: 'yyyy-mm-dd'
});

$("#btn-manual").click(function () {
    $("#latitude").removeAttr("readonly");
    $("#longitude").removeAttr("readonly");
    $("#latitude").focus();
});

$("#btn-peta").click(function () {
    $.ajax(
            {
                url: window.location.href + '/viewPeta',
                type: "POST",
                dataType: "string",
                success: function (msg)
                {
                    $('#peta').html(msg);
                },
                error: function (data)
                {
                    $('#peta').html("Peta Tidak Dapat Ditampilkan!");
                }
            });
});

function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email)) {
        return false;
    } else {
        return true;
    }
}

function submitForm(e) {
    $("#formProfil").submit(function (e)
    {
        e.preventDefault();
        var jnsForm = $("#listFktp").val();
        var newURL = $('body').data('baseurl');
        var postData = $(this).serializeArray();
        var formURL = $(this).attr("action");
        showLoading();
        $.ajax(
                {
                    url: formURL,
                    type: "POST",
                    data: new FormData(this),
                    processData: false,
                    contentType: false,
                    cache: false,
                    async: false,
                    beforeSend: function() {
                        showLoading();
                    },
                    success: function (msg)
                    {
//                        alert(msg);
                        var info = msg.split("##");
                        if (info[0] == 0) {
                            alert(info[1]);
                            hideLoading();
                        } else {
                            alert(info[1]);
                            window.location.href = window.location.href + '/selfAssesment';
                        }
                    },
                    error: function (data)
                    {
                        alert("Error! Terjadi kesalahan, ulangi lagi.");
                        hideLoading();
                    }
                });
        e.preventDefault(); //STOP default action
        e.unbind(); //unbind. to stop multiple form submit.
    });

    $("#formProfil").submit(); //Submit  the FORM
}

function cekUpload() {
    var datapost = $('#formUpload').serializeArray();
    var a;
    var jqXHR = $.ajax({
        url: window.location.href + '/cekUpload',
        type: "POST",
        data: datapost,
        async: false,
        success: function (msg)
        {
            a = msg;
        }
    });
    return jqXHR.responseText;
}

function ValidateDokumen(id, ismandatory)
{
    var filesip = $('#myfile' + id).val();
//    console.log('#myfile' + id);
//    console.log(filesip);
    var regex = new RegExp('^' + name);
    if (ismandatory == 1) {
        if ((filesip === '' || filesip === undefined))
        {
            return false;
        } else {
            var checkimg = filesip;
            var myfile_ = document.getElementById("myfile" + id);
            if (!checkimg.match(/(\.pdf|\.PDF)$/)) {
                return false;
            } else if (parseInt(myfile_.files[0].size) > 1048576)  // validation according to file size
            {
                return false;
            } else {
                return true;
            }
        }
    } else {
        return true;
    }
}

function cekuploadfile(jnsdokumen) {
    for (var i = 0; i < jnsdokumen.length; i++) {
        var nomor = $("#nomor" + jnsdokumen[i].ID).val();
        var tmt = $("#tmtberkas" + jnsdokumen[i].ID).val();
        var tat = $("#tatberkas" + jnsdokumen[i].ID).val();
        var ismandatory = $("#ismandatory" + jnsdokumen[i].ID).val();

        if (nomor == '' && jnsdokumen[i].ID != '5' && jnsdokumen[i].ID != '6' && ismandatory == 1) {
            alert("Nomor dokumen ke " + (i + 1) + " tidak boleh kosong");
            return false;
        } else if (tmt == '' && jnsdokumen[i].ID != '5' && jnsdokumen[i].ID != '6' && ismandatory == 1) {
            alert("Tanggal mulai berlaku dokumen ke " + (i + 1) + " tidak boleh kosong");
            return false;
        } else if (tat == '' && jnsdokumen[i].ID != '5' && jnsdokumen[i].ID != '6' && ismandatory == 1) {
            alert("Tanggal akhir berlaku dokumen ke " + (i + 1) + " tidak boleh kosong");
            return false;
        } else if (!ValidateDokumen(jnsdokumen[i].ID, ismandatory) && jnsdokumen[i].ID != '5' && jnsdokumen[i].ID != '6') {
            return false;
        }
    }
    return true;
}


//$("#btn-selfassesmentfktp").click(function () {
function simpandatafktp(jnsdokumen) {
//    var cek = cekUpload();
    var regPosition = /^(\-?\d+(\.\d+)?)$/;
    var lat = $("#latitude").val();
    var long = $("#longitude").val();
    var vLat = regPosition.test(lat);
    var vLong = regPosition.test(long);
//    var flagupload = cekuploadfile(jnsdokumen);
//    console.log(flagupload);
    console.log(cekuploadfile(jnsdokumen));

    if ($("#nmPemilik").val() == '') {
        $("#notNmPemilik").notify("Nama Pemilik tidak boleh kosong...");
        $("#nmPemilik").focus();
    } else if ($("#instansi").val() == '') {
        $("#notInstansi").notify("Nama Instansi tidak boleh kosong...");
        $("#instansi").focus();
    } else if ($("#alamat").val() == '') {
        $("#notAlamat").notify("Alamat tidak boleh kosong...");
        $("#alamat").focus();
    } else if ($("#propinsi").val() == '') {
        $("#notPropinsi").notify("Propinsi tidak boleh kosong...");
        $("#propinsi").focus();
    } else if ($('#dati2').val() == '') {
        $("#notDati2").notify("Dati 2 tidak boleh kosong...");
        $("#dati2").focus();
    } else if ($('#kec').val() == '') {
        $("#notKec").notify("Kecamatan tidak boleh kosong...");
        $("#kec").focus();
    } else if ($('#kel').val() == '') {
        $("#notKel").notify("Kelurahan tidak boleh kosong...");
        $("#kel").focus();
    } else if ($('#kodepos').val() == '') {
        $("#notKodepos").notify("Kode Pos tidak boleh kosong...");
        $("#kodepos").focus();
    } else if ($('#rt').val() == '') {
        $("#notRT").notify("RT tidak boleh kosong...");
        $("#rt").focus();
    } else if ($('#rw').val() == '') {
        $("#notRW").notify("RW tidak boleh kosong...");
        $("#rw").focus();
    } else if ($('#telpppk').val() == '') {
        $("#telpppk").notify("Telp faskes tidak boleh kosong...");
        $("#telpppk").focus();
    } else if ($('#faksimile').val() == '') {
        $("#faksimile").notify("Faksimile tidak boleh kosong...");
        $("#faksimile").focus();
    } else if ($('#latitude').val() == '') {
        $("#notLatitude").notify("Latitude tidak boleh kosong...");
        $("#latitude").focus();
    } else if ($('#longitude').val() == '') {
        $("#notLongitude").notify("Longitude tidak boleh kosong...");
        $("#longitude").focus();
    } else if (vLat == false) {
        $("#notLatitude").notify("Format Latitude salah, contoh : -6.166171317051734");
        $("#latitude").focus();
    } else if (vLong == false) {
        $("#notLongitude").notify("Format Longitude salah, contoh : 106.87401575158992");
        $("#longitude").focus();
    } else if ($('#latitude').val() > 90 || $('#latitude').val() < -90) {
        $("#notLatitude").notify("Latitude tidak boleh lebih dari 90 atau kurang dari -90...");
        $("#latitude").focus();
    } else if ($('#longitude').val() > 15069 || $('#longitude').val() < -15069) {
        $("#notLongitude").notify("Longitude tidak boleh lebih dari 15069 atau kurang dari -15069...");
        $("#longitude").focus();
    } else if ($('#nmpenanggungjawab').val() == '') {
        $("#nmpenanggungjawab").notify("Nama penanggungjawab tidak boleh kosong...");
        $("#nmpenanggungjawab").focus();
    } else if ($('#jabatanpenanggungjawab').val() == '') {
        $("#notJabatanPenanggungjawab").notify("Jabatan penanggungjawab tidak boleh kosong...");
        $("#jabatanpenanggungjawab").focus();
    } else if ($('#notelppenanggungjawab').val() == '') {
        $("#notelppenanggungjawab").notify("Telp penanggungjawab tidak boleh kosong...");
        $("#notelppenanggungjawab").focus();
    } else if ($('#nohppenanggungjawab').val() == '') {
        $("#nohppenanggungjawab").notify("HP tidak boleh kosong...");
        $("#nohppenanggungjawab").focus();
    } else if ($('#emailPenanggungjawab').val() == '') {
        $("#emailPenanggungjawab").notify("Email tidak boleh kosong...");
        $("#emailPenanggungjawab").focus();
    } else if ($('#pemilikPajak').val() == '') {
        $("#notPemilikPajak").notify("Pemilik Pajak tidak boleh kosong...");
        $("#pemilikPajak").focus();
    } else if ($('#npwp').val() == '' && $('#pemilikPajak').val() != '0') {
        $("#notNPWP").notify("NPWP tidak boleh kosong...");
        $("#npwp").focus();
    } else if ($('#norekppk').val() == '') {
        $("#notNorekppk").notify("Nomor Rekening tidak boleh kosong...");
        $("#norekppk").focus();
    } else if ($('#nmrekppk').val() == '') {
        $("#notNmrekppk").notify("Atas nama rekening tidak boleh kosong...");
        $("#jumDokum").focus();
    } else if ($('#bankppk').val() == '') {
        $("#notBankppk").notify("Bank tidak boleh kosong...");
        $("#bankppk").focus();
    } else if ($('#jumDokgi').val() == '') {
        $("#notJumDokgi").notify("Jumlah Dokter Gigi tidak boleh kosong...");
        $("#jumDokgi").focus();
    } else if ($('#jumPer').val() == '') {
        $("#notJumper").notify("Jumlah Perawat tidak boleh kosong...");
        $("#jumPer").focus();
    } else if ($('#jumAp').val() == '') {
        $("#notJumAp").notify("Jumlah Apoteker tidak boleh kosong...");
        $("#jumAp").focus();
    } else if ($('#jumAsap').val() == '') {
        $("#notJumAsap").notify("Jumlah Asisten Apoteker tidak boleh kosong...");
        $("#jumAsap").focus();
    } else if ($('#jumBid').val() == '') {
        $("#notJumBid").notify("Jumlah Bidan tidak boleh kosong...");
        $("#jumBid").focus();
    } else if ($('#jumAG').val() == '') {
        $("#notJumAG").notify("Jumlah Ahli Gizi tidak boleh kosong...");
        $("#jumAG").focus();
    } else if ($('#jumSan').val() == '') {
        $("#notJumSan").notify("Jumlah Sanitarian tidak boleh kosong...");
        $("#jumSan").focus();
    } else if ($('#jumPetAdm').val() == '') {
        $("#notJumPetAdm").notify("Jumlah Petugas Administrasi tidak boleh kosong...");
        $("#jumPetAdm").focus();
    } else if ($('#jumTMLain').val() == '') {
        $("#notJumTMLain").notify("Jumlah Tenaga Medis Lain tidak boleh kosong...");
        $("#jumTMLain").focus();
    } else if (!cekuploadfile(jnsdokumen)) {
        alert("Cek kembali dokumen upload Anda, nomor dan tanggal harus terisi dan file harus bertipe pdf dan tidak boleh lebih dari 1MB.")
    } else {
        bootbox.confirm("Pastikan data Anda sudah benar, lanjutkan?", function (result) {
            if (result == true) {
                submitForm();
            }
        });
    }
}
;
//});

//$("#btn-selfassesmentfkrtl").click(function () {
function simpandatafkrtl(jnsdokumen) {
//    var cek = cekUpload();
    var regPosition = /^(\-?\d+(\.\d+)?)$/;
    var lat = $("#latitude").val();
    var long = $("#longitude").val();
    var vLat = regPosition.test(lat);
    var vLong = regPosition.test(long);
//    var flagupload = cekuploadfile(jnsdokumen);

    if ($("#nmPemilik").val() == '') {
        $("#notNmPemilik").notify("Nama Pemilik tidak boleh kosong...");
        $("#nmPemilik").focus();
    } else if ($("#nikPemilik").val() == '') {
        $("#notNikPemilik").notify("NIK Pemilik tidak boleh kosong...");
        $("#nikPemilik").focus();
    } else if ($("#instansi").val() == '') {
        $("#notInstansi").notify("Nama Instansi tidak boleh kosong...");
        $("#instansi").focus();
    } else if ($("#nikpenanggungjawab").val() == '') {
        $("#notNIKPenanggungjawab").notify("NIK penanggung jawab tidak boleh kosong...");
        $("#nikpenanggungjawab").focus();
    } else if ($("#nmpenanggungjawab").val() == '') {
        $("#notNmPenanggungjawab").notify("Nama penanggung jawab tidak boleh kosong...");
        $("#nmpenanggungjawab").focus();
    } else if ($("#jabatanpenanggungjawab").val() == '') {
        $("#notJabatanPenanggungjawab").notify("Jabatan penanggung jawab tidak boleh kosong...");
        $("#jabatanpenanggungjawab").focus();
    } else if ($('#notelppenanggungjawab').val() == '') {
        $("#notelppenanggungjawab").notify("Telp penanggungjawab tidak boleh kosong...");
        $("#notelppenanggungjawab").focus();
    } else if ($("#nohppenanggungjawab").val() == '') {
        $("#notHpPenanggungjawab").notify("No HP penanggung jawab tidak boleh kosong...");
        $("#nohppenanggungjawab").focus();
    } else if ($("#emailPenanggungjawab").val() == '') {
        $("#notEmailPenanggungjawab").notify("Email penanggung jawab tidak boleh kosong...");
        $("#emailPenanggungjawab").focus();
    } else if (IsEmail($("#emailPenanggungjawab").val()) == false) {
        $("#notEmailPenanggungjawab").notify("Email penanggung jawab harus sesuai format (contohemail@gmail.com)");
        $("#emailPenanggungjawab").focus();
    } else if ($('#norekppk').val() == '') {
        $("#notNorekppk").notify("Nomor Rekening tidak boleh kosong...");
        $("#norekppk").focus();
    } else if ($('#nmrekppk').val() == '') {
        $("#notNmrekppk").notify("Atas nama rekening tidak boleh kosong...");
        $("#jumDokum").focus();
    } else if ($('#bankppk').val() == '') {
        $("#notBankppk").notify("Bank tidak boleh kosong...");
        $("#bankppk").focus();
    } else if ($("#alamat").val() == '') {
        $("#notAlamat").notify("Alamat tidak boleh kosong...");
        $("#alamat").focus();
    } else if ($("#propinsi").val() == '') {
        $("#notPropinsi").notify("Propinsi tidak boleh kosong...");
        $("#propinsi").focus();
    } else if ($('#dati2').val() == '') {
        $("#notDati2").notify("Dati 2 tidak boleh kosong...");
        $("#dati2").focus();
    } else if ($('#kec').val() == '') {
        $("#notKec").notify("Kecamatan tidak boleh kosong...");
        $("#kec").focus();
    } else if ($('#kel').val() == '') {
        $("#notKel").notify("Kelurahan tidak boleh kosong...");
        $("#kel").focus();
    } else if ($('#kodepos').val() == '') {
        $("#notKodepos").notify("Kode Pos tidak boleh kosong...");
        $("#kodepos").focus();
    } else if ($('#rt').val() == '') {
        $("#notRT").notify("RT tidak boleh kosong...");
        $("#rt").focus();
    } else if ($('#rw').val() == '') {
        $("#notRW").notify("RW tidak boleh kosong...");
        $("#rw").focus();
    } else if ($('#latitude').val() == '') {
        $("#notLatitude").notify("Latitude tidak boleh kosong...");
        $("#latitude").focus();
    } else if ($('#longitude').val() == '') {
        $("#notLongitude").notify("Longitude tidak boleh kosong...");
        $("#longitude").focus();
    } else if (vLat == false) {
        $("#notLatitude").notify("Format Latitude salah, contoh : -6.166171317051734");
        $("#latitude").focus();
    } else if (vLong == false) {
        $("#notLongitude").notify("Format Longitude salah, contoh : 106.87401575158992");
        $("#longitude").focus();
    } else if ($('#latitude').val() > 90 || $('#latitude').val() < -90) {
        $("#notLatitude").notify("Latitude tidak boleh lebih dari 90 atau kurang dari -90...");
        $("#latitude").focus();
    } else if ($('#longitude').val() > 15069 || $('#longitude').val() < -15069) {
        $("#notLongitude").notify("Longitude tidak boleh lebih dari 15069 atau kurang dari -15069...");
        $("#longitude").focus();
    } else if ($('#fixed').val() == '') {
        $("#notFixed").notify("Fixed tidak boleh kosong...");
        $("#fixed").focus();
    } else if ($('#hp').val() == '') {
        $("#notHP").notify("HP tidak boleh kosong...");
        $("#hp").focus();
    } else if ($('#faxppk1').val() == '') {
        $("#notFaksimile").notify("Faksimile tidak boleh kosong...");
        $("#faksimile").focus();
    } else if ($('#faxppk2').val() == '') {
        $("#notFaksimile").notify("Faksimile tidak boleh kosong...");
        $("#faksimile").focus();
    } else if ($('#email').val() == '') {
        $("#notEmail").notify("Email tidak boleh kosong...");
        $("#email").focus();
    } else if ($('#pemilikPajak').val() == '') {
        $("#notPemilikPajak").notify("Pemilik Pajak tidak boleh kosong...");
        $("#pemilikPajak").focus();
    } else if ($('#npwp').val() == '' && $('#pemilikPajak').val() != '0') {
        $("#notNPWP").notify("NPWP tidak boleh kosong...");
        $("#npwp").focus();
    } else if ($('#cbgs').val() == '') {
        $("#notCbgs").notify("Jika tidak ada, isi dengan tanda (-)...");
        $("#cbgs").focus();
    } else if ($('#jumVVIP').val() == '') {
        $("#notJumVVIP").notify("Jumlah tempat tidur VVIP tidak boleh kosong, isi 0 jika tidak ada...");
        $("#jumVVIP").focus();
    } else if ($('#jumVIP').val() == '') {
        $("#notJumVIP").notify("Jumlah tempat tidur VIP tidak boleh kosong, isi 0 jika tidak ada...");
        $("#jumVIP").focus();
    } else if ($('#jumK1').val() == '') {
        $("#notJumK1").notify("Jumlah tempat tidur Kelas I tidak boleh kosong, isi 0 jika tidak ada...");
        $("#jumK1").focus();
    } else if ($('#jumK2').val() == '') {
        $("#notJumK2").notify("Jumlah tempat tidur Kelas II tidak boleh kosong, isi 0 jika tidak ada...");
        $("#jumK2").focus();
    } else if ($('#jumK3').val() == '') {
        $("#notJumK3").notify("Jumlah tempat tidur Kelas III tidak boleh kosong, isi 0 jika tidak ada...");
        $("#jumK3").focus();
    } else if (!cekuploadfile(jnsdokumen)) {
        alert("Cek kembali dokumen upload Anda, nomor dan tanggal harus terisi dan file harus bertipe pdf dan tidak boleh lebih dari 1MB.")
    }
//    else if ($('#COB').val() == '') {
//        $("#notCOB").notify("Layanan COB tidak boleh kosong...");
//        $("#COB").focus();
//    } 
//    else if ($('#HD').val() == '') {
//        $("#notHD").notify("Layanan HD tidak boleh kosong...");
//        $("#HD").focus();
//    } 
//    else if ($('#jumAp').val() == '') {
//        $("#notJumAp").notify("Jumlah Apoteker tidak boleh kosong...");
//        $("#jumAp").focus();
//    } else if ($('#jumAsap').val() == '') {
//        $("#notJumAsap").notify("Jumlah Asisten Apoteker tidak boleh kosong...");
//        $("#jumAsap").focus();
//    } else if ($('#layAp').val() == '') {
//        $("#notLayAp").notify("Layanan Apotik tidak boleh kosong...");
//        $("#layAp").focus();
//    } else if ($('#cod').val() == '') {
//        $("#notCod").notify("Layanan delivery order harus ditentukan ada/tidak...");
//        $("#cod").focus();
//    } else if ($('#jumOpt').val() == '') {
//        $("#notJumOpt").notify("Jumlah Refraksionis Optisien tidak boleh kosong...");
//        $("#jumOpt").focus();
//    } else if ($('#jumHari').val() == '') {
//        $("#notJumHari").notify("Jumlah hari kerja tidak boleh kosong...");
//        $("#jumHari").focus();
//    } else if ($('#jumJam').val() == '') {
//        $("#notJumJam").notify("Jumlah jam kerja tidak boleh kosong...");
//        $("#jumJam").focus();
//    } else if ($('#flagcabang').val() == '') {
//        $("#notFlagcabang").notify("Kepemilikan cabang harus ditentukan ya/tidak...");
//        $("#flagcabang").focus();
//    } else if ($('#flagasosiasi').val() == '') {
//        $("#notFlagAsosiasi").notify("Keanggotaan asosiasi harus ditentukan ya/tidak...");
//        $("#flagasosiasi").focus();
//    } else if ($('#nmasosiasi').val() == '' && $('#flagasosiasi').val() == '1') {
//        $("#notNmAsosiasi").notify("Nama Asosiasi tidak boleh kosong jika tergabung dalam asosiasi optikal...");
//        $("#nmasosiasi").focus();
//    } else if ($('#cob').val() == '') {
//        $("#notCOB").notify("Layanan COB tidak boleh kosong...");
//        $("#cob").focus();
//    } else if ($('#HD').val() == '') {
//        $("#notHD").notify("Layanan HD tidak boleh kosong...");
//        $("#HD").focus();
//    } else if (cek == 0) {
//        $("#infox").html('<div class="alert alert-danger"><pre><code class="prettyprint">Anda harus upload file dahulu, pastikan data Anda benar!</code></pre></div>');
//    } 
    else {
        bootbox.confirm("Pastikan data Anda sudah benar, lanjutkan?", function (result) {
            if (result == true) {
                submitForm();
            }
        });
    }
}
;

$("#btn-ResetProfil").click(function () {
    $("#nmPemilik").val('');
    $("#alamat").val('');
    $('#kodepos').val('');
    $('#rt').val('');
    $('#rw').val('');
    $('#latitude').val('');
    $('#longitude').val('');
    $('#hp').val('');
    $('#faksimile').val('');
    $('#cbgs').val('');
    $('#tempatLahir').val('');
    $('#tglLahir').val('');
    $('#pemilikPajak').select2("val", "");
    $('#npwp').val('');
    $('#norekppk').val('');
    $('#nmrekppk').val('');
    $('#bankppk').val('');
    $('#jumDokum').val('');
    $('#jumDokgi').val('');
    $('#jumPer').val('');
    $('#jumAp').val('');
    $('#jumAsap').val('');
    $('#jumBid').val('');
    $('#jumAG').val('');
    $('#jumSan').val('');
    $('#jumPetAdm').val('');
    $('#jumTMLain').val('');
    $('#jumVVIP').val('');
    $('#jumVIP').val('');
    $('#jumK1').val('');
    $('#jumK2').val('');
    $('#jumK3').val('');
});

$("#btn-btnedit").click(function () {
    var regPosition = /^(\-?\d+(\.\d+)?)$/;
    var lat = $("#latitude").val();
    var long = $("#longitude").val();
    var vLat = regPosition.test(lat);
    var vLong = regPosition.test(long);

    if ($("#nmPemilik").val() == '') {
        $("#notNmPemilik").notify("Nama Pemilik tidak boleh kosong...");
        $("#nmPemilik").focus();
    } else if ($("#instansi").val() == '') {
        $("#notInstansi").notify("Nama Instansi tidak boleh kosong...");
        $("#instansi").focus();
    } else if ($("#alamat").val() == '') {
        $("#notAlamat").notify("Alamat tidak boleh kosong...");
        $("#alamat").focus();
    } else if ($("#propinsi").val() == '') {
        $("#notPropinsi").notify("Propinsi tidak boleh kosong...");
        $("#propinsi").focus();
    } else if ($('#dati2').val() == '') {
        $("#notDati2").notify("Dati 2 tidak boleh kosong...");
        $("#dati2").focus();
    } else if ($('#kec').val() == '') {
        $("#notKec").notify("Kecamatan tidak boleh kosong...");
        $("#kec").focus();
    } else if ($('#kel').val() == '') {
        $("#notKel").notify("Kelurahan tidak boleh kosong...");
        $("#kel").focus();
    } else if ($('#kodepos').val() == '') {
        $("#notKodepos").notify("Kode Pos tidak boleh kosong...");
        $("#kodepos").focus();
    } else if ($('#rt').val() == '') {
        $("#notRT").notify("RT tidak boleh kosong...");
        $("#rt").focus();
    } else if ($('#rw').val() == '') {
        $("#notRW").notify("RW tidak boleh kosong...");
        $("#rw").focus();
    } else if ($('#latitude').val() == '') {
        $("#notLatitude").notify("Latitude tidak boleh kosong...");
        $("#latitude").focus();
    } else if ($('#longitude').val() == '') {
        $("#notLongitude").notify("Longitude tidak boleh kosong...");
        $("#longitude").focus();
    } else if (vLat == false) {
        $("#notLatitude").notify("Format Latitude salah, contoh : -6.166171317051734");
        $("#latitude").focus();
    } else if (vLong == false) {
        $("#notLongitude").notify("Format Longitude salah, contoh : 106.87401575158992");
        $("#longitude").focus();
    } else if ($('#latitude').val() > 90 || $('#latitude').val() < -90) {
        $("#notLatitude").notify("Latitude tidak boleh lebih dari 90 atau kurang dari -90...");
        $("#latitude").focus();
    } else if ($('#longitude').val() > 15069 || $('#longitude').val() < -15069) {
        $("#notLongitude").notify("Longitude tidak boleh lebih dari 15069 atau kurang dari -15069...");
        $("#longitude").focus();
    } else if ($('#fixed').val() == '') {
        $("#notFixed").notify("Fixed tidak boleh kosong...");
        $("#fixed").focus();
    } else if ($('#hp').val() == '') {
        $("#notHP").notify("HP tidak boleh kosong...");
        $("#hp").focus();
    } else if ($('#faksimile').val() == '') {
        $("#notFaksimile").notify("Faksimile tidak boleh kosong...");
        $("#faksimile").focus();
    } else if ($('#email').val() == '') {
        $("#notEmail").notify("Email tidak boleh kosong...");
        $("#email").focus();
    } else if ($('#jenkel').val() == '') {
        $("#notJenkel").notify("Jenis Kelamin tidak boleh kosong...");
        $("#jenkel").focus();
    } else if ($('#tempatLahir').val() == '') {
        $("#notTmptLhr").notify("Tempat Lahir tidak boleh kosong...");
        $("#tempatLahir").focus();
    } else if ($('#tglLahir').val() == '') {
        $("#notTglLhr").notify("Tgl Lahir tidak boleh kosong...");
        $("#tglLahir").focus();
    } else if ($('#pemilikPajak').val() == '') {
        $("#notPemilikPajak").notify("Pemilik Pajak tidak boleh kosong...");
        $("#pemilikPajak").focus();
    } else if ($('#npwp').val() == '' && $('#pemilikPajak').val() != '0') {
        $("#notNPWP").notify("NPWP tidak boleh kosong...");
        $("#npwp").focus();
    } else if ($('#norekppk').val() == '') {
        $("#notNorekppk").notify("Nomor Rekening tidak boleh kosong...");
        $("#norekppk").focus();
    } else if ($('#nmrekppk').val() == '') {
        $("#notNmrekppk").notify("Atas nama rekening tidak boleh kosong...");
        $("#jumDokum").focus();
    } else if ($('#bankppk').val() == '') {
        $("#notBankppk").notify("Bank tidak boleh kosong...");
        $("#bankppk").focus();
    } else if ($('#jumDokum').val() == '') {
        $("#notJumDokum").notify("Jumlah Dokter Umum tidak boleh kosong...");
        $("#jumDokum").focus();
    } else if ($('#jumDokgi').val() == '') {
        $("#notJumDokgi").notify("Jumlah Dokter Gigi tidak boleh kosong...");
        $("#jumDokgi").focus();
    } else if ($('#jumPer').val() == '') {
        $("#notJumper").notify("Jumlah Perawat tidak boleh kosong...");
        $("#jumPer").focus();
    } else if ($('#jumAp').val() == '') {
        $("#notJumAp").notify("Jumlah Apoteker tidak boleh kosong...");
        $("#jumAp").focus();
    } else if ($('#jumAsap').val() == '') {
        $("#notJumAsap").notify("Jumlah Asisten Apoteker tidak boleh kosong...");
        $("#jumAsap").focus();
    } else if ($('#jumBid').val() == '') {
        $("#notJumBid").notify("Jumlah Bidan tidak boleh kosong...");
        $("#jumBid").focus();
    } else if ($('#jumAG').val() == '') {
        $("#notJumAG").notify("Jumlah Ahli Gizi tidak boleh kosong...");
        $("#jumAG").focus();
    } else if ($('#jumSan').val() == '') {
        $("#notJumSan").notify("Jumlah Sanitarian tidak boleh kosong...");
        $("#jumSan").focus();
    } else if ($('#jumPetAdm').val() == '') {
        $("#notJumPetAdm").notify("Jumlah Petugas Administrasi tidak boleh kosong...");
        $("#jumPetAdm").focus();
    } else if ($('#jumTMLain').val() == '') {
        $("#notJumTMLain").notify("Jumlah Tenaga Medis Lain tidak boleh kosong...");
        $("#jumTMLain").focus();
    } else if ($('#sio').val() == '') {
        $("#notSio").notify("Nomor Berkas Syarat tidak boleh kosong...");
        $("#sio").focus();
    } else if ($('#masasio').val() == '') {
        $("#notMasasio").notify("Masa Berlaku tidak boleh kosong...");
        $("#masasio").focus();
    } else if ($('#fileUpload').val() == '') {
        $("#notFileUpload").notify("Anda harus upload berkas terlebih dahulu...");
        $("#fileUpload").focus();
    } else if (cek == 0) {
        $("#info").html('<div class="alert alert-danger"><pre><code class="prettyprint">Anda harus upload file dahulu, pastikan data Anda benar!</code></pre></div>');
    } else {
        bootbox.confirm("Pastikan data Anda sudah benar, lanjutkan?", function (result) {
            if (result == true) {
                submitEditForm();
            }
        });
    }
});

function submitEditForm(e) {
    $("#formEditProfil").submit(function (e)
    {
        var jnsForm = $("#listFktp").val();
        var newURL = $('body').data('baseurl');
        var postData = $(this).serializeArray();
        var formURL = $(this).attr("action");
        showLoading();
        $.ajax(
                {
                    url: formURL,
                    type: "POST",
                    data: postData,
                    success: function (msg)
                    {
//                        alert(msg);
                        var info = msg.split("##");
                        if (info[0] == 0) {
                            alert(info[1]);
                            hideLoading();
                        } else {
                            alert(info[1]);
                            window.location.href = window.location.href + '/selfAssesment';
                        }
                    },
                    error: function (data)
                    {
                        alert("Error! Terjadi kesalahan, cek data Anda dan ulangi lagi.");
                        hideLoading();
//                        window.location.href = newURL;
                    }
                });
        e.preventDefault(); //STOP default action
        e.unbind(); //unbind. to stop multiple form submit.
    });

    $("#formEditProfil").submit(); //Submit  the FORM
}

function tambahdatadokter(kode, kdreg) {
    var nmfaskes = $('#nmfaskes').val();
    $.ajax({
        type: 'POST',
        data: {kode: kode, kdreg: kdreg, nmfaskes: nmfaskes},
        url: window.location.href + "/tambahDataDokter",
        success: function (data) {
            $('#popuptambahdokter').html(data);
            $('#popuptambahdokter').modal({'backdrop': 'static'});
        }
    });
}

function viewdatadokter(kodetenagamedis, kdppk, kdsubspesialis_trs) {
    var nmfaskes = $('#nmfaskes').val();
    $.ajax({
        type: 'POST',
        data: {kodetenagamedis: kodetenagamedis, kdppk: kdppk, nmfaskes: nmfaskes, kdsubspesialis_trs: kdsubspesialis_trs},
        url: window.location.href + "/viewDataDokter",
        success: function (data) {
            $('#popuptambahdokter').html(data);
            $('#popuptambahdokter').modal({'backdrop': 'static'});
        }
    });
}

function simpansaranapenunjang_cafas() {
    var jenissaranapenunjang = $('#jenissaranapenunjang').val();
    var jwbsarana = 1;
    var kdreg = $('#kdReg').val();
    var jumlah = $('#jumlahsarana').val();
    var act = 'tambah';

    if (jenissaranapenunjang == '') {
        $('#notjenissaranapenunjang').notify('Jenis sarana penunjang tidak boleh kosong');
    } else if (jumlah == '') {
        $('#notjumlahsarana').notify('Jumlah sarana penunjang tidak boleh kosong');
    } else {
        bootbox.confirm({
            size: "small",
            message: "Simpan data sarana, apakah Anda yakin?",
            callback: function (result) { /* result is a boolean; true = OK, false = Cancel*/
                if (result == true) {
                    $.ajax({
                        type: 'POST',
                        data: {kdreg: kdreg, jenissaranapenunjang: jenissaranapenunjang, jwbsarana: jwbsarana, jumlah: jumlah, act: act},
                        url: window.location.href + "/simpanSaranaPenunjang",
                        success: function (msg) {
                            var info = msg.split("##");
                            if (info[0] == 0) {
                                alert(info[1]);
                                hideLoading();
                            } else {
                                alert(info[1]);
                                $('#formsaranapenunjang').css("display", "none");
                                $('#tabelsaranapenunjang').css("display", "");
                                refreshsaranapenunjang();
                            }
                        },
                        error: function (data)
                        {
                            alert("Error! Terjadi kesalahan, cek data Anda dan ulangi lagi.");
                            hideLoading();
                        }
                    });
                }
            }
        });
    }
}

function editsaranapenunjang_cafas(kode, kdreg) {
    $.ajax({
        type: 'POST',
        data: {kdreg: kdreg, kode: kode},
        url: window.location.href + "/editsaranapenunjang",
        success: function (msg) {
            $('#popupeditsaranapenunjang_cafas').html(msg);
            $('#popupeditsaranapenunjang_cafas').modal({'backdrop': 'static'});
        }
    });
}

function hapussaranapenunjang_cafas(kode) {
    bootbox.confirm({
        size: "small",
        message: "Apakah Anda yakin?",
        callback: function (result) { /* result is a boolean; true = OK, false = Cancel*/
            if (result == true) {
                $.ajax({
                    type: 'POST',
                    data: {kode: kode},
                    url: window.location.href + "/hapussaranapenunjang",
                    success: function (msg) {
                        var info = msg.split("##");
                        if (info[0] == 0) {
                            alert(info[1]);
                            hideLoading();
                        } else {
                            alert(info[1]);
                            refreshsaranapenunjang();
                        }
                    }
                });
            }
        }
    });
}

function simpanpelayanan_cafas() {
    var jenispelayanan = $('#jenispelayanan').val();
    var spesialis = $('#spesialis').val();
    var subspesialis = $('#subspesialis').val();
    var estimasiwaktu = $('#estimasiwaktu_cafas').val();
    var statusaktif = $('#statusaktif').val();
    var flageksekutif = $('#flageksekutif').val();
    var proporsijkn = $('#proporsijknpengajuan').val();
    var kdreg = $('#kdReg').val();
    var jenistenagamedis = 1;
    var act = 'tambah';

    if (jenispelayanan == '') {
        $('#notjenispelayanan').notify('Jenis pelayanan tidak boleh kosong');
    } else if (spesialis == '') {
        $('#notspesialis').notify('Spesialis tidak boleh kosong');
    } else if (subspesialis == '') {
        $('#notsubspesialis').notify('Sub Spesialis tidak boleh kosong');
    } else if (estimasiwaktu == '') {
        $('#notestimasiwaktu').notify('Estimasi waktu layanan per orang (menit)');
    } else if (flageksekutif == '') {
        $('#notflageksekutif').notify('Flag Eksekutif tidak boleh kosong');
    } else if (proporsijkn == '') {
        $('#notproporsijkn').notify('Proporsi JKN tidak boleh kosong');
    } else {
        bootbox.confirm({
            size: "small",
            message: "Apakah Anda yakin?",
            callback: function (result) { /* result is a boolean; true = OK, false = Cancel*/
                if (result == true) {
                    $.ajax({
                        type: 'POST',
                        data: {kdreg: kdreg, jenispelayanan: jenispelayanan, spesialis: spesialis, subspesialis: subspesialis, poli: spesialis, statusaktif: statusaktif, estimasiwaktu: estimasiwaktu, jenistenagamedis: jenistenagamedis, flageksekutif: flageksekutif, proporsijknpengajuan: proporsijkn, act: act},
                        url: window.location.href + "/simpanPelayanan",
                        success: function (msg) {
                            var info = msg.split("##");
                            if (info[0] == 0) {
                                alert(info[1]);
                                hideLoading();
                            } else {
                                alert(info[1]);
                                $('#formpelayanan').css("display", "none");
                                $('#tabeltenagamedis').css("display", "");
                                $('#estimasiwaktu_cafas').val("");
                                refresh_pelayanan_cafas();
                            }
                        },
                        error: function (data)
                        {
                            alert("Error! Terjadi kesalahan, cek data Anda dan ulangi lagi.");
                            hideLoading();
                        }
                    });
                }
            }
        });
    }
}

$("#jenispelayanan").change(function () {
    var jenispelayanan = $("#jenispelayanan").select2("val");
    if (jenispelayanan == null) {
        jenispelayanan = 0;
    }
    $.ajax({
        type: "POST",
        url: window.location.href + "/getSpesialis/kodepelayanan/" + jenispelayanan,
        dataType: "json",
        success: function (msg) {
            $("#subspesialis").select2("val", "");
            $("#subspesialis").empty();
            $("#spesialis").select2("val", "");
            $("#spesialis").empty();
            $("#spesialis").append("<option value=\'\'></option>");
            $.each(msg, function (index, spesialis) {
                $("#spesialis").append("<option value=\'" + spesialis.kodespesialis + "\'>" + spesialis.nama + "</option>");
            });
        }
    });
});
$("#spesialis").change(function () {
    var spesialis = $("#spesialis").select2("val");
    if (spesialis == null) {
        spesialis = 0;
    }
    $.ajax({
        type: "POST",
        url: window.location.href + "/getSubSpesialis/kodespesialis/" + spesialis,
        dataType: "json",
        success: function (msg) {
            $("#subspesialis").select2("val", "");
            $("#subspesialis").empty();
            $("#subspesialis").append("<option value=\'\'></option>");
            $.each(msg, function (index, subspesialis) {
                $("#subspesialis").append("<option value=\'" + subspesialis.kodesubspesialis + "\'>" + subspesialis.nama + "</option>");
            });
        }
    });
});

function editpelayanan_cafas(kode, kdreg) {
    $.ajax({
        type: 'POST',
        data: {kdreg: kdreg, kode: kode},
        url: window.location.href + "/editpelayanan",
        success: function (msg) {
            $('#popupeditpelayanan').html(msg);
            $('#popupeditpelayanan').modal({'backdrop': 'static'});
        }
    });
}

function hapuspelayanan_cafas(kode, kdreg) {
    bootbox.confirm({
        size: "small",
        message: "Apakah Anda yakin menghapus data ini? Dokter yang terdaftar di pelayanan ini akan dihapus.",
        callback: function (result) { /* result is a boolean; true = OK, false = Cancel*/
            if (result == true) {
                $.ajax({
                    type: 'POST',
                    data: {kdreg: kdreg, kode: kode},
                    url: window.location.href + "/hapuspelayanan",
                    success: function (msg) {
                        var info = msg.split("##");
                        if (info[0] == 0) {
                            alert(info[1]);
                            hideLoading();
                        } else {
                            alert(info[1]);
                            $('#formpelayanan').css("display", "none");
                            $('#tabeltenagamedis').css("display", "");
                            $('#estimasiwaktu_cafas').val("");
                            refresh_pelayanan_cafas();
                        }
                    }
                });
            }
        }
    });
}

function tambahdatadokter_cafas(kode, kdreg) {
    var nmfaskes = $('#nmfaskes').val();
    $.ajax({
        type: 'POST',
        data: {kode: kode, kdreg: kdreg, nmfaskes: nmfaskes},
        url: window.location.href + "/tambahDataDokter",
        success: function (data) {
            $('#popuptambahdokter').html(data);
            $('#popuptambahdokter').modal({'backdrop': 'static'});
        }
    });
}

function viewdatadokter_cafas(kodetenagamedis, kdppk, kdsubspesialis_trs) {
    var nmfaskes = $('#nmfaskes').val();
    $.ajax({
        type: 'POST',
        data: {kodetenagamedis: kodetenagamedis, kdppk: kdppk, nmfaskes: nmfaskes, kdsubspesialis_trs: kdsubspesialis_trs},
        url: window.location.href + "/viewDataDokter",
        success: function (data) {
            $('#popuptambahdokter').html(data);
            $('#popuptambahdokter').modal({'backdrop': 'static'});
        }
    });
}

function cekupload() {


}