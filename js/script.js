/*
|--------------------------------------------------------------------------
| Конфигурација на сктирптата - Trajce Gogov
|--------------------------------------------------------------------------
|
| Треба да знаеш што работиш тука за да правеш промени
|
*/
window.onload = function () {
    var page = new Page;
    page.changeTitlePage();
    page.setVolume();

    var player = new Player();
    player.play();

    getStreamingData();
    // Вредност во милисекунди
    setInterval(function () {
        getStreamingData();
    }, 9000);

    var coverArt = document.getElementsByClassName('cover-album')[0];

    coverArt.style.height = coverArt.offsetWidth + 'px';
}

function Page() {
    this.changeTitlePage = function (title = RADIO_NAME) {
        document.title = title;
    };

    this.refreshCurrentSong = function (song, artist) {
        var currentSong = document.getElementById('currentSong');
        var currentArtist = document.getElementById('currentArtist');

        if (song !== currentSong.innerHTML) {
            currentSong.className = 'animated flipInY text-uppercase';
            currentSong.innerHTML = song;

            currentArtist.className = 'animated flipInY text-capitalize';
            currentArtist.innerHTML = artist;

            document.getElementById('lyricsSong').innerHTML = song + ' - ' + artist;

            setTimeout(function () {
                currentSong.className = 'text-uppercase';
                currentArtist.className = 'text-capitalize';
            }, 2000);
        }
    }

    this.refreshHistoric = function (info, n) {
        var $historicDiv = document.querySelectorAll('#historicSong article');
        var $songName = document.querySelectorAll('#historicSong article .music-info .song');
        var $artistName = document.querySelectorAll('#historicSong article .music-info .artist');

        // Дефинирање на позадини за песни - горе
        const FRATELLO = "img/izveduvaci/212.jpg";
        const STAVI_PRAVU_STVAR = 'img/izveduvaci/213.jpg';
        const STO_SI_U_KAVU_STAVILA = 'img/izveduvaci/214.jpg';
        const OBICNA_LJUBAVNA_PJESMA  = 'img/izveduvaci/215.jpg';
        const A_STA_DA_RADIM = 'img/izveduvaci/216.jpg';
        const DIGNI_ME_VISOKO = 'img/izveduvaci/217.jpg';
        const OTKAZAN_LET = 'img/izveduvaci/218.jpg';
        const LJUBAV_PREKO_ZICE = 'img/izveduvaci/219.jpg';
        const MIKI_MIKI = 'img/izveduvaci/220.jpg';
        const DAO_SAM_TI_DUSU = 'img/izveduvaci/221.jpg';
        const S_TOBOM_NASAO_SAM_SRECU = 'img/izveduvaci/222.jpg';
        const KESTENI = 'img/izveduvaci/223.jpg';
        const POSLE_9_GODINA = 'img/izveduvaci/224.jpg';
        const SANJA = 'img/izveduvaci/225.jpg';
        const EJ_STA_MI_RADIS = 'img/izveduvaci/226.jpg';
        const NEK_TI_JUTRO_MIRISE_NA_MENE = 'img/izveduvaci/227.jpg';
        const DOJDJI_U_5_DO_5 = 'img/izveduvaci/228.jpg';
        const ZEMLJO_MOJA_FT_ISMETA_KRAVAC = 'img/izveduvaci/229.jpg';
        const ANDJELI_NAS_ZOVU_DA_IM_SKINEMO_KRILA = 'img/izveduvaci/230.jpg';
        const O_MLADOSTI = 'img/izveduvaci/231.jpg';
        const SVE_STO_ZNAS_O_MENI = 'img/izveduvaci/232.jpg';
        const DEVOJKA_IZ_MOGA_KRAJA = 'img/izveduvaci/233.jpg';
        const PROLJECE_BEZ_TEBE = 'img/izveduvaci/234.jpg';
        const ZAGRLI_ME = 'img/izveduvaci/235.jpg';
        const DEVOJKA_BROJ_8 = 'img/izveduvaci/236.jpg';
        const PAKLENI_VOZACI = 'img/izveduvaci/237.jpg';
        const ZA_LJUBAV_TREBA_IMAT_DUSU = 'img/izveduvaci/238.jpg';
        const VOLJELA_ME_NIJE_NI_JEDNA = 'img/izveduvaci/239.jpg';
        const USNE_VRELE_VISNJE = 'img/izveduvaci/240.jpg';
        const AKO_ZNAS_BILO_STA = 'img/izveduvaci/241.jpg';
        const BALKAN = 'img/izveduvaci/242.jpg';
        const GRACIJA = 'img/izveduvaci/243.jpg';
        const MARINA = 'img/izveduvaci/244.jpg';
        const LJEPE_ZENE_PROLAZE_KROZ_GRAD = 'img/izveduvaci/245.jpg';
        const NOC_BEZ_SNA = 'img/izveduvaci/246.jpg';
        const DA_TE_VIDIM_GOLU = 'img/izveduvaci/247.jpg';
        const SAMO_NAM_JE_LJUBAV_POTREBNA = 'img/izveduvaci/248.jpg';
        const PLAVI_SAFIRU = 'img/izveduvaci/249.jpg';
        const OD_KAD_TEBE_VOLIM = 'img/izveduvaci/250.jpg';
        const VERUJEM_NE_VERUJEM = 'img/izveduvaci/251.jpg';
        const GODINE_PROLAZE = 'img/izveduvaci/252.jpg';
        const TISINA = 'img/izveduvaci/253.jpg';
        const RUSKI_VOZ = 'img/izveduvaci/254.jpg';
        const VESELA_PESMA = 'img/izveduvaci/255.jpg';
        const ZIVOT_JE_NEKAD_SIV_NEKAD_ZUT = 'img/izveduvaci/256.jpg';
        const GORE_DOLE = 'img/izveduvaci/257.jpg';
        const TI_SE_LJUBIS = 'img/izveduvaci/258.jpg';
        const SA_DRUGE_STRANE = 'img/izveduvaci/259.jpg';
        const ZAZMURI = 'img/izveduvaci/260.jpg';
        const DO_BEOGRADA = 'img/izveduvaci/261.jpg';
        const VIDI_STA_SAM_TI_URADIO_OD_PESME_MAMA = 'img/izveduvaci/262.jpg';
        const SARENE_PILILE = 'img/izveduvaci/264.jpg';
        const VEK = 'img/izveduvaci/265.jpg';
        const TAMARA = 'img/izveduvaci/266.jpg';
        const POLJUBI_ME = 'img/izveduvaci/267.jpg';
        const LEPA_JANJA_RIBAREVA_KCI = 'img/izveduvaci/268.jpg';
        const ZMAJ_OD_NOCAJA = 'img/izveduvaci/269.jpg';
        const MUZIKA_NA_STRUJU = 'img/izveduvaci/270.jpg';
        const OVO_JE_BALKAN = 'img/izveduvaci/271.jpg';
        const JOS_TE_VOLIM = 'img/izveduvaci/272.jpg';
        const NA_VRHOVIMA_PRSTIJU = 'img/izveduvaci/273.jpg';
        const KAD_HODAS = 'img/izveduvaci/274.jpg';
        const MOJI_SU_DRUGOVI = 'img/izveduvaci/275.jpg';
        const GDE_SI = 'img/izveduvaci/276.jpg';
        const BAM_BAM_BAM = 'img/izveduvaci/277.jpg';
        const NEKA_SVEMIR_CUJE_NEMIR = 'img/izveduvaci/278.jpg';
        const JEDINO_TO_SE_ZOVE_LJUBAV = 'img/izveduvaci/279.jpg';
        const KRV_SRECA_SUZE_I_ZNOJ = 'img/izveduvaci/280.jpg';
        const RUDI = 'img/izveduvaci/281.jpg';
        const BRA_ZIL = 'img/izveduvaci/282.jpg';
        const HAJDE_DA_UZMEMO_NEKI_DOBAR_AUTO = 'img/izveduvaci/283.jpg';
        const BADEMI_I_SO_FT_BAJAGA = 'img/izveduvaci/284.jpg';
        const DA_PRICAMO_O_LJUBAVI = 'img/izveduvaci/285.jpg';
        const IPAK_POZELIM_NEKO_PISMO = 'img/izveduvaci/286.jpg';
        const BITANGA_I_PRINCEZA = 'img/izveduvaci/287.jpg';
        const SVE_CE_TO_MILA_MOJA_PREKRITI_RUZMARIN = 'img/izveduvaci/288.jpg';
        const NOCAS_JE_KO_LUBENICA = 'img/izveduvaci/289.jpg';
        const PLJUNI_I_ZAPEVAJ_MOJA_JUGOSLAVIJO = 'img/izveduvaci/290.jpg';
        const A_I_TI_ME_IZNEVJERI = 'img/izveduvaci/291.jpg';
        const RUZICA_SI_BILA = 'img/izveduvaci/292.jpg';
        const HAJDEMO_U_PLANINE = 'img/izveduvaci/293.jpg';
        const JER_KAD_OSTARIS = 'img/izveduvaci/294.jpg';
        const LAZES_ZLATO = 'img/izveduvaci/295.jpg';
        const ZA_ESMU = 'img/izveduvaci/296.jpg';
        const LIPE_CVATU = 'img/izveduvaci/297.jpg';
        const PADAJU_ZVEZDE = 'img/izveduvaci/298.jpg';
        const DA_TE_BOGDO_NEVOLIM = 'img/izveduvaci/299.jpg';
        const MENI_SE_NESPAVA = 'img/izveduvaci/300.jpg';
        const AKO_MOZES_ZABORAVI = 'img/izveduvaci/301.jpg';
        const U_VREME_OTKAZANIH_LETOVA = 'img/izveduvaci/302.jpg';
        const DOZIVJETI_STOTU = 'img/izveduvaci/303.jpg';
        const ZAZMURI_I_BROJ_DO_100 = 'img/izveduvaci/304.jpg';
        const PRISTAO_SAM_BICU_SVE_STO_HOCE = 'img/izveduvaci/305.jpg';
        const HA_HA_HA_SVI_MARS_NA_PLJES = 'img/izveduvaci/306.jpg';
        const KAD_BI_BIO_BIJELO_DUGME = 'img/izveduvaci/307.jpg';
        const SELMA = 'img/izveduvaci/308.jpg';
        const IMA_NEKA_TAJNA_VEZA = 'img/izveduvaci/309.jpg';
        const DA_SAM_PEKAR = 'img/izveduvaci/310.jpg';
        const NE_SPAVAJ_MALA_MOJA_MUZIKA_DOK_SVIRA = 'img/izveduvaci/311.jpg';
        const AKO_IMA_BOGA = 'img/izveduvaci/312.jpg';
        const NAPILE_SE_ULICE = 'img/izveduvaci/313.jpg';
        const STA_IMA_NOVO = 'img/izveduvaci/314.jpg';
        const NAKON_SVIH_OVIH_GODINA = 'img/izveduvaci/315.jpg';
        const CIRIBIRIBELA = 'img/izveduvaci/316.jpg';
        const DJURDJEVDAN = 'img/izveduvaci/317.jpg';
        const EVO_ZAKLECU_SE = 'img/izveduvaci/318.jpg';
        const IZGLEDALA_JE_MALO_CUDNO_U_KAPUTU = 'img/izveduvaci/319.jpg';
        const LOSE_VINO = 'img/izveduvaci/320.jpg';
        const SANJAO_SAM_NOCAS_DA_TE_NEMAM = 'img/izveduvaci/321.jpg';
        const NA_ZADNJEM_SEDISTU_MOGA_AUTA = 'img/izveduvaci/322.jpg';
        const SVI_MARS_NA_PLES = 'img/izveduvaci/323.jpg';
        const TAKO_TI_JE_MALA_MOJA = 'img/izveduvaci/324.jpg';
        const DOBRO_VAM_JUTRO = 'img/izveduvaci/325.jpg';
        const ZLATNI_DAN = 'img/izveduvaci/326.jpg';
        const MILO_MOJE = 'img/izveduvaci/327.jpg';
        const UZALUD_ME_PODSECAS = 'img/izveduvaci/328.jpg';
        const STO_JE_SA_PRINCEZOM_MOJE_VRELE_MLADOSTI = 'img/izveduvaci/329.jpg';
        const KO_SAM_BEZ_TEBE = 'img/izveduvaci/330.jpg';
        const EMILY = 'img/izveduvaci/331.jpg';
        const KUDA_IDU_IZGUBLJENE_DEVOJKE = 'img/izveduvaci/332.jpg';
        const PRODALA_ME_TI = 'img/izveduvaci/333.jpg';
        const DOK_SVIRA_RADIO = 'img/izveduvaci/334.jpg';
        const DALEKO_FT_KEMALMONTENO = 'img/izveduvaci/335.jpg';
        const MI_SMO_JACI_I_OD_SUDBINE = 'img/izveduvaci/336.jpg';
        const U_DOBRU_I_ZLU = 'img/izveduvaci/337.jpg';
        const ELOIS = 'img/izveduvaci/338.jpg';
        const TUGA_TI_I_JA = 'img/izveduvaci/339.jpg';
        const TO_MI_RADI = 'img/izveduvaci/340.jpg';
        const NEKAKO_S_PROLJECA_FT_KEMAL_MONTENO = 'img/izveduvaci/341.jpg';
        const MOJE_NAJMILIJE = 'img/izveduvaci/342.jpg';
        const TUGO_NESRECO = 'img/izveduvaci/343.jpg';
        const ZOVU_NAS_ULICE = 'img/izveduvaci/345.jpg';
        const BJEZI_KISO_S_PROZORA = 'img/izveduvaci/346.jpg';
        const TAMO_GDE_LJUBAV_POCINJE = 'img/izveduvaci/347.jpg';
        const TVOGA_SRCA_VRATA = 'img/izveduvaci/348.jpg';
        const DIRLIJA = 'img/izveduvaci/349.jpg';
        const IMAM_NEKE_FORE = 'img/izveduvaci/350.jpg';
        const VOLIO_BI_DA_SI_TU = 'img/izveduvaci/351.jpg';
        const SAMPANJSKI_POLJUBAC = 'img/izveduvaci/352.jpg';
        const DA_MI_JE_DO_NJE = 'img/izveduvaci/353.jpg';
        const STIZU_ME_SECANJA = 'img/izveduvaci/354.jpg';
        const IMA_NESTO_OD_SRCA_DO_SRCA  = 'img/izveduvaci/355.jpg';
        const AKO_AKO = 'img/izveduvaci/356.jpg';
        const SVIDJA_MI_SE_OVA_STVAR = 'img/izveduvaci/357.jpg';
        const PRINCIPESSA  = 'img/izveduvaci/358.jpg';
        const NEMA_VISE_VREMENA = 'img/izveduvaci/359.jpg';
        const S_TVOJIH_USANA = 'img/izveduvaci/360.jpg';
        const FLOYD  = 'img/izveduvaci/361.jpg';
        const JA_HOCU_ZIVOT  = 'img/izveduvaci/362.jpg';
        const NOC_JE_PREKRASNA  = 'img/izveduvaci/363.jpg';
        const DZULI  = 'img/izveduvaci/364.jpg';
        const NEKA_MI_NE_SVANE  = 'img/izveduvaci/365.jpg';
        const DA_JE_SALDJE_ZASPATI  = 'img/izveduvaci/366.jpg';
        const ULICA_JORGOVANA = 'img/izveduvaci/367.jpg';
        const JA_BIH_DA_PEVAM  = 'img/izveduvaci/368.jpg';
        const JULIJA  = 'img/izveduvaci/369.jpg';
        const LETNJE_KISE  = 'img/izveduvaci/370.jpg';
        const OAZA_SNOVA  = 'img/izveduvaci/371.jpg';
        const SOBA_23  = 'img/izveduvaci/372.jpg';
        const PROGRAM_TVOG_KOMPJUTERA  = 'img/izveduvaci/373.jpg';
        const VOLI_ME_JOS_OVU_NOC  = 'img/izveduvaci/374.jpg';
        const JA_SAM_LAZLJIVA  = 'img/izveduvaci/375.jpg';
        const U_RITMU_ME_OKRENI = 'img/izveduvaci/376.jpg';
        const TI_SI_MI_U_MISLIMA  = 'img/izveduvaci/377.jpg';
        const TEBI_PRIPADAM  = 'img/izveduvaci/378.jpg';
        const LJUBAV_SE_ZOVE_IMENOM_TVOIM  = 'img/izveduvaci/379.jpg';
        const NECU_DA_ZNAM_ZA_NIKOG_OSIM_TEBE  = 'img/izveduvaci/380.jpg';
        const JACE_MANIJACE  = 'img/izveduvaci/381.jpg';
        const UMRI_PRIJE_SMRTI  = 'img/izveduvaci/382.jpg';
        const SREDINOM  = 'img/izveduvaci/383.jpg';
        const MOJ_JE_ZIVOT_SVICARSKA  = 'img/izveduvaci/384.jpg';
        const SVE_JE_LAZ  = 'img/izveduvaci/385.jpg';
        const GODINAMA  = 'img/izveduvaci/386.jpg';
        const KAD_SI_REKLA_DA_ME_VOLIS  = 'img/izveduvaci/387.jpg';
        const HITNA  = 'img/izveduvaci/388.jpg';
        const DA_JE_TUGA_SNIJEG  = 'img/izveduvaci/389.jpg';
        const KREMEN  = 'img/izveduvaci/390.jpg';
        const KAD_COVIJEK_VOLI_ZENU  = 'img/izveduvaci/391.jpg';
        const STA_TI_ZNACIM_JA  = 'img/izveduvaci/392.jpg';
        const DANAS_SAM_OK  = 'img/izveduvaci/393.jpg';
        const BOSNOM_BEHAR_PROBEHARAO = 'img/izveduvaci/394.jpg';
        const OBICNA_LJUBAVNAPJESMA = 'img/izveduvaci/395.jpg';
        const ASTA_DA_RADIM = 'img/izveduvaci/396.jpg';
        const DIGNI_MEVISOKO  = 'img/izveduvaci/397.jpg';
        const FRAT_ELLO = 'img/izveduvaci/398.jpg';
        const STAVI_PRAVUSTVAR  = 'img/izveduvaci/399.jpg';
        const STA_SI_MI_UKAVU_STAVILA  = 'img/izveduvaci/400.jpg';
        const NESTO LIJEPO TREBA DA SE DESI = 'img/izveduvaci/401.jpg';
        const MJESECINA = 'img/izveduvaci/402.jpg';
        const JEL SARAJEVO GDE JE NEKAD BILO  = 'img/izveduvaci/403.jpg';
        const KAD ZAMIRISU JORGOVANI FT.VESNA ZMIJANAC  = 'img/izveduvaci/404.jpg';
        const ZAR JE TO SVE STO IMAM OD TEBE  = 'img/izveduvaci/405.jpg';
        const JA POTPUNO TRIJEZAN UMIREM  = 'img/izveduvaci/406.jpg';
        const NE ZOVI ME NA GRIJEH = 'img/izveduvaci/407.jpg';
        const NEMAM JA 18 GODINA  = 'img/izveduvaci/408.jpg';
        const KOKUZNA VREMENA  = 'img/izveduvaci/409.jpg';
        const JA SAM NA TE NAVIKO  = 'img/izveduvaci/410.jpg';
        const UCINI MI PRAVU STVAR  = 'img/izveduvaci/411.jpg';
        const SA MOJIH USANA  = 'img/izveduvaci/412.jpg';
        const DA SUTIS  = 'img/izveduvaci/413.jpg';
        const OTKRIT CU TI TAJNU  = 'img/izveduvaci/414.jpg';
        const DESET MLADJA  = 'img/izveduvaci/415.jpg';
        const OSTAT CE ISTINE DVIJE  = 'img/izveduvaci/416.jpg';
        const AKO ME IKADA SRETNES  = 'img/izveduvaci/417.jpg';
        const ZABORAVI  = 'img/izveduvaci/418.jpg';
        const MOJA BOGDA SNA  = 'img/izveduvaci/419.jpg';
        const BASKA TI  = 'img/izveduvaci/420.jpg';
        const SMIJEHOM STRAH POKRIJEM  = 'img/izveduvaci/421.jpg';
        const NEK PADAJU CUSKIJE  = 'img/izveduvaci/422.jpg';
        const ISPOCETKA  = 'img/izveduvaci/423.jpg';
        const SVE DOK TE BUDE IMALO  = 'img/izveduvaci/424.jpg';
        const LAZU ME  = 'img/izveduvaci/425.jpg';
        const LELO  = 'img/izveduvaci/426.jpg';
        const MARIJA  = 'img/izveduvaci/427.jpg';
        const KAKO SI TOPLA I MILA  = 'img/izveduvaci/428.jpg';
        const KRIVO JE MORE  = 'img/izveduvaci/429.jpg';
        const JEDINA MOJA  = 'img/izveduvaci/430.jpg';
        const ZAUVJEK TVOJ  = 'img/izveduvaci/431.jpg';
        const VOLI TE TVOJA ZVER  = 'img/izveduvaci/432.jpg';
        const OSTANI UZ MENE  = 'img/izveduvaci/433.jpg';
        const BAMBINA  = 'img/izveduvaci/434.jpg';
        const DANI LJUBAVI  = 'img/izveduvaci/435.jpg';
        const IVONA  = 'img/izveduvaci/436.jpg';
        const JAGODE I COKOLADA  = 'img/izveduvaci/437.jpg';
        const PRICAJ MI O LJUBAVI  = 'img/izveduvaci/438.jpg';
        const ANDJELA (MOJA JE DRAGA VESTICA)  = 'img/izveduvaci/439.jpg';
        const BOZA ZVANI PUB  = 'img/izveduvaci/440.jpg';
        const DEVOJKA SA CARDAS NOGAMA = 'img/izveduvaci/441.jpg';
        const DIVLJI BADEM  = 'img/izveduvaci/442.jpg';
        const D MOLL  = 'img/izveduvaci/443.jpg';
        const JA LUZER  = 'img/izveduvaci/444.jpg';
        const JAROSLAVA PRINCEZO JAVI SE  = 'img/izveduvaci/445.jpg';
        const LEPA PROTINA KCI  = 'img/izveduvaci/446.jpg';
        const LJERKA  = 'img/izveduvaci/447.jpg';
        const NE LOMITE MI BAGRENJE  = 'img/izveduvaci/448.jpg';
        const NE VOLIM JANUAR  = 'img/izveduvaci/449.jpg';
        const NEKI NOVI KLINCI  = 'img/izveduvaci/450.jpg';
        const NEVERNIK  = 'img/izveduvaci/451.jpg';
        const NIKAD KAO BANE = 'img/izveduvaci/452.jpg';
        const OLELOLE  = 'img/izveduvaci/453.jpg';
        const OPROSTI MI KATRIN = 'img/izveduvaci/454.jpg';
        const PA DOBRO GDE SI TI  = 'img/izveduvaci/455.jpg';
        const PORTRET MOG ZIVOTA  = 'img/izveduvaci/456.jpg';
        const PROVINCIJALKA  = 'img/izveduvaci/457.jpg';
        const PRVA LJUBAV  = 'img/izveduvaci/458.jpg';
        const RINGISPIL = 'img/izveduvaci/459.jpg';
        const SIN JEDINAC  = 'img/izveduvaci/460.jpg';
        const SLABO DIVANIM MADZARSKI  = 'img/izveduvaci/461.jpg';
        const SLOVENSKA  = 'img/izveduvaci/462.jpg';
        const SVIRAJTE MI JESEN STIZE DUNJO MOJA  = 'img/izveduvaci/463.jpg';
        const USPAVANKA ZA DECAKA  = 'img/izveduvaci/464.jpg';
        const OLIVERA  = 'img/izveduvaci/465.jpg';
        const SJAJ U TAMI  = 'img/izveduvaci/466.jpg';
        const SAKOM O STOL  = 'img/izveduvaci/467.jpg';
        const JA NOCAS UMIREM  = 'img/izveduvaci/468.jpg';
        const KRIVI LJUDI  = 'img/izveduvaci/469.jpg';
        const MALO MI ZA SRICU TRIBA  = 'img/izveduvaci/470.jpg';
        const MARIJA MAGDALENA  = 'img/izveduvaci/471.jpg';
        const MORAM = 'img/izveduvaci/472.jpg';
        const PETAK  = 'img/izveduvaci/473.jpg';
        const TO  = 'img/izveduvaci/474.jpg';
        const ZELJO MOJA  = 'img/izveduvaci/475.jpg';
        const NI DA MORA NESTANE  = 'img/izveduvaci/476.jpg';
        const STA JE OD MENE OSTALO  = 'img/izveduvaci/477.jpg';
        const IMA LI NADE ZA NAS FT. ANDJELA ZECIC  = 'img/izveduvaci/478.jpg';
        const PISI MI  = 'img/izveduvaci/479.jpg';
        const PRODJE OVAJ DAN  = 'img/izveduvaci/480.jpg';
        const PAR GODINA ZA NAS  = 'img/izveduvaci/481.jpg';
        const SRCE  = 'img/izveduvaci/482.jpg';
        const OCI BOJE MEDA  = 'img/izveduvaci/483.jpg';
        const TI SI SAV MOJ BOL  = 'img/izveduvaci/484.jpg';
        const KRUG = 'img/izveduvaci/485.jpg';
        const DA SI TAKO JAKA  = 'img/izveduvaci/486.jpg';
        const BEJBE TI NISI TU  = 'img/izveduvaci/487.jpg';
        const IGRA ROCK NN ROLL CELA JUGOSLAVIJA  = 'img/izveduvaci/488.jpg';
        const MALA MALA MALA GRUPA PEDERA  = 'img/izveduvaci/489.jpg';
        const PARANOJA  = 'img/izveduvaci/490.jpg';
        const STO JA VOLIM TAJ SEX = 'img/izveduvaci/491.jpg';
        const A SADA IDEM FT.TIFA  = 'img/izveduvaci/492.jpg';
        const BOJE SU U NAMA  = 'img/izveduvaci/493.jpg';
        const DOCI CU TI U SNOVIMA  = 'img/izveduvaci/494.jpg';
        const LIJEPO LIJEPO NEOPISIVO  = 'img/izveduvaci/495.jpg';
        const NJEZNO NJEZNO NJEZNIJE  = 'img/izveduvaci/496.jpg';
        const PJEVAJMO DO ZORE  = 'img/izveduvaci/497.jpg';
        const ZAMISLI ZIVOT U RITMU MUZIKE ZA PLES  = 'img/izveduvaci/498.jpg';
        const DOBRE VIBRACIJE  = 'img/izveduvaci/499.jpg';
        const SRCE NA CESTI  = 'img/izveduvaci/500.jpg';
        const MI NISMO SAMI = 'img/izveduvaci/501.jpg';
        const SJECAM SE PRVOG POLJUPCA = 'img/izveduvaci/502.jpg';
        const LJUBAV JE ZAKON = 'img/izveduvaci/503.jpg';
        const MACKA = 'img/izveduvaci/504.jpg';
        const ZABORAVIT CU SVE = 'img/izveduvaci/505.jpg';
        const ZVONI TELEFON = 'img/izveduvaci/506.jpg';
        const VOLIM TE BUDALO MALA = 'img/izveduvaci/507.jpg';
        const ZAGRLJENI = 'img/izveduvaci/508.jpg';
        const PAMTIM SAMO SRETNE DANE = 'img/izveduvaci/509.jpg';
        const ON ME VOLI NA SVOJ NACIN = 'img/izveduvaci/510.jpg';
        const VINO I GITARE = 'img/izveduvaci/511.jpg';
        const CINIM PRAVU STVAR = 'img/izveduvaci/512.jpg';
        const DVIJE DUSE = 'img/izveduvaci/513.jpg';
        const ISPOD MOGA PRAMCA = 'img/izveduvaci/514.jpg';
        const OVO MI JE SKOLA = 'img/izveduvaci/515.jpg';
        const SUVISE SAM NJEN = 'img/izveduvaci/516.jpg';
        const BAS TI LIJEPO STOJE SUZE = 'img/izveduvaci/517.jpg';
        const HEJ KAKO SI = 'img/izveduvaci/518.jpg';
        const JAVI SE= 'img/izveduvaci/519.jpg';
        const KAD DODJE OKTOBAR = 'img/izveduvaci/520.jpg';
        const KAO DOMINE = 'img/izveduvaci/521.jpg';
        const CUVAM NOC OD BUDNIH = 'img/izveduvaci/522.jpg';
        const FEMME FATALE = 'img/izveduvaci/523.jpg';
        const KAO KAKAO = 'img/izveduvaci/524.jpg';
        const MAMURNI LJUDI = 'img/izveduvaci/525.jpg';
        const SKOPJE = 'img/izveduvaci/526.jpg';
        const UCI ME MAJKO, KARAJ ME = 'img/izveduvaci/527.jpg';
        const CUKNI VO DRVO = 'img/izveduvaci/528.jpg';
        const IMA VREMENA = 'img/izveduvaci/529.jpg';
        const SANJAO SAM MOJ RUZICU = 'img/izveduvaci/530.jpg';
        const GUTLJAJ VINA = 'img/izveduvaci/531.jpg';
        const JEL ZBOG NJE = 'img/izveduvaci/532.jpg';
        const KOKOLO = 'img/izveduvaci/533.jpg';
        const LJUBE SE DOBRI LOSI ZLI = 'img/izveduvaci/534.jpg';
        const MINUT SRCA TVOG = 'img/izveduvaci/535.jpg';
        const OKO MOJE SANJIVO = 'img/izveduvaci/536.jpg';
        const OPIJUM = 'img/izveduvaci/537.jpg';
        const PUT PUTUJEM = 'img/izveduvaci/538.jpg';
        const RANO, RANIJE = 'img/izveduvaci/539.jpg';
        const SUZE BISERNE = 'img/izveduvaci/540.jpg';
        const SVE BI SEKE LJUBILE MORNARE = 'img/izveduvaci/541.jpg';
        const TAMARA = 'img/izveduvaci/542.jpg';
        const AKO ME OSTAVIS = 'img/izveduvaci/543.jpg';
        const JA NEMAM VISE RAZLOGA DA ZIVIM = 'img/izveduvaci/544.jpg';
        const JEDAN DAN ZIVOTA = 'img/izveduvaci/545.jpg';
        const JOS I DANAS TEKU SUZE JEDNE ZENE = 'img/izveduvaci/546.jpg';
        const MALO MI JE JEDAN ZIVOT S TOBOM = 'img/izveduvaci/547.jpg';
        const NIKOGA NISAM VOLIO TAKO = 'img/izveduvaci/548.jpg';
        const OSTALA SI UVIJEK ISTA = 'img/izveduvaci/549.jpg';
        const SVI PEVAJU, JA NE CUJEM = 'img/izveduvaci/550.jpg';
        const TI SI PJESMA MOJE DUSE = 'img/izveduvaci/551.jpg';
        const DALI SI SPAVALA = 'img/izveduvaci/552.jpg';
        const DA ME NISI = 'img/izveduvaci/553.jpg';
        const DIGNI RUKU = 'img/izveduvaci/554.jpg';
        const DODIRNI ME = 'img/izveduvaci/555.jpg';
        const KAD ME POGLEDAS = 'img/izveduvaci/556.jpg';
        const KOTOR = 'img/izveduvaci/557.jpg';
        const SKADARSKA = 'img/izveduvaci/558.jpg';
        const TRUBE = 'img/izveduvaci/559.jpg';
        const TI SAMO BUDI DOVOLJNO DALEKO = 'img/izveduvaci/560.jpg';
        const OSMIJEH = 'img/izveduvaci/561.jpg';
        const KENOZOIK = 'img/izveduvaci/562.jpg';
        const MALJCHIKI = 'img/izveduvaci/563.jpg';
        const LEJLA = 'img/izveduvaci/564.jpg';
        const LUD SAM ZA TOBOM = 'img/izveduvaci/565.jpg';
        const NEK NEBO NAM SUDI = 'img/izveduvaci/566.jpg';
        const OSTAVI SUZE ZA KRAJ = 'img/izveduvaci/567.jpg';
        const OTKAD TEBE NEMA = 'img/izveduvaci/568.jpg';
        const RODJENA SI SAMO ZA MENE = 'img/izveduvaci/569.jpg';
        const RUZMARIN = 'img/izveduvaci/570.jpg';
        const STRAH ME DA TE VOLIM = 'img/izveduvaci/571.jpg';
        const SVE LJUBAVI SU TUZNE = 'img/izveduvaci/572.jpg';
        const SVI MOJI DRUMOVI = 'img/izveduvaci/573.jpg';
        const TI ZNAS SVE = 'img/izveduvaci/574.jpg';
        const VOLIO BI DA TE NE VOLIM = 'img/izveduvaci/575.jpg';
        const STRANAC U NOCI = 'img/izveduvaci/576.jpg';
        const POTRAZI ME U PREDGRADU = 'img/izveduvaci/577.jpg';
        const SAMO SIMPATIJA = 'img/izveduvaci/578.jpg';
        const ZORA JE = 'img/izveduvaci/579.jpg';
        const STO CE TAJ COVJEK TU = 'img/izveduvaci/580.jpg';
        const TESKA VREMENA PRIJATELJU MOJ = 'img/izveduvaci/581.jpg';
        const DOTAKNI ME USNAMA = 'img/izveduvaci/582.jpg';
        const RIJEKA SNOVA = 'img/izveduvaci/583.jpg';
        const SUNCAN DAN = 'img/izveduvaci/584.jpg';
        const KAVANNA FT. FIUMENS = 'img/izveduvaci/585.jpg';
        const NAJDRAZE MOJE = 'img/izveduvaci/586.jpg';
        const PLAVA KOSULJA = 'img/izveduvaci/587.jpg';
        const SUTI MOJ DJECACE PLAVI = 'img/izveduvaci/588.jpg';
        const ZA DOBRA STARA VREMENA = 'img/izveduvaci/589.jpg';
        const ZNAM = 'img/izveduvaci/590.jpg';
        const BICU TVOJ = 'img/izveduvaci/591.jpg';
        const BOBANE = 'img/izveduvaci/592.jpg';
        const DODJE MI DA VRISNEM TVOJE IME = 'img/izveduvaci/593.jpg';
        const NIJE ZA NJU = 'img/izveduvaci/594.jpg'
        const ODLAZIM A VOLIM TE = 'img/izveduvaci/595.jpg';
        const OSLONI SE NE MENE = 'img/izveduvaci/596.jpg';
        const PITAJU ME PITAJU = 'img/izveduvaci/597.jpg';
        const POMAGAJTE DRUGOVI = 'img/izveduvaci/598.jpg';
        const SMEJEM SE A PLAKAO BIH = 'img/izveduvaci/599.jpg';
        const ZBOG TEBE BIH TUCAO KAMEN = 'img/izveduvaci/600.jpg';
        const CRNI PLES = 'img/izveduvaci/601.jpg';
        const DENIS = 'img/izveduvaci/602.jpg';
        const NADJI ME = 'img/izveduvaci/603.jpg';
        const SAM = 'img/izveduvaci/604.jpg';
        const BROD U BOCI = 'img/izveduvaci/605.jpg';
        const CESARICA = 'img/izveduvaci/606.jpg';
        const DVAPUT SAN UMRA = 'img/izveduvaci/607.jpg';
        const KAD MI DODZES TI = 'img/izveduvaci/608.jpg';
        const NEBO MOJE = 'img/izveduvaci/609.jpg';
        const NEDOSTAJES MI TI = 'img/izveduvaci/610.jpg';
        const NOCTURNO = 'img/izveduvaci/611.jpg';
        const PISMO MOJA = 'img/izveduvaci/612.jpg';
        const PRED TVOJIM VRATIMA = 'img/izveduvaci/613.jpg';
        const STINE = 'img/izveduvaci/614.jpg';
        const STO TO BJESE LJUBAV = 'img/izveduvaci/615.jpg';
        const SVE BI DA ZA NJU = 'img/izveduvaci/616.jpg';
        const SVIRAJTE NOCAS ZA MOJU DUSU = 'img/izveduvaci/617.jpg';
        const TRAG U BESKRAJU = 'img/izveduvaci/618.jpg';
        const VJERUJ U LJUBAV = 'img/izveduvaci/619.jpg';
        const U LJUBAV VJERE NEMAM FT.GIBONNI = 'img/izveduvaci/620.jpg';
        const DZENI = 'img/izveduvaci/621.jpg';
        const E DA SI BAREM NOCAS OVDJE = 'img/izveduvaci/622.jpg';
        const E MOJ SASA = 'img/izveduvaci/623.jpg';
        const JA SAM ZA PLES = 'img/izveduvaci/624.jpg';
        const JESEN JE = 'img/izveduvaci/625.jpg';
        const MILENA = 'img/izveduvaci/626.jpg';
        const CARTE BLANCHE = 'img/izveduvaci/627.jpg';
        const BEZ TEBE = 'img/izveduvaci/628.jpg';
        const DITELINA S CETRI LISTA = 'img/izveduvaci/629.jpg';
        const JEDAN OD MNOGIH = 'img/izveduvaci/630.jpg';
        const CALIFORNIA = 'img/izveduvaci/631.jpg';
        const JEANS GENERACIJA = 'img/izveduvaci/632.jpg';
        const KAKVA NOC = 'img/izveduvaci/633.jpg';
        const DZEMPER ZA VINOGRAD = 'img/izveduvaci/634.jpg';
        const KAD BI DOSLA MARIJA = 'img/izveduvaci/635.jpg';
        const OD DRUGA DO DRUGA = 'img/izveduvaci/636.jpg';
        const VINO NOCI FT.DEMODE = 'img/izveduvaci/637.jpg';
        const KOLACICI = 'img/izveduvaci/638.jpg';
        const DA MI JE BITI MORSKI PAS = 'img/izveduvaci/639.jpg';
        const AKO JEDNOM VIDIS MARIJU = 'img/izveduvaci/640.jpg';
        const KAD BIH ZNAO DA JE SAMA = 'img/izveduvaci/641.jpg';
        const AKO OVO JE KRAJ FT.DAVOR DRAGOJEVIC = 'img/izveduvaci/642.jpg';
        const APSOLUTNO TVOJ = 'img/izveduvaci/643.jpg';
        const JA IMAM TE A KO DA NEMAM TE = 'img/izveduvaci/644.jpg';
        const PRSTEN I ZLATNI LANAC = 'img/izveduvaci/645.jpg';
        const STO JE BILO BILO JE = 'img/izveduvaci/646.jpg';
        const ZUTE DUNJE = 'img/izveduvaci/647.jpg';
        const IMA NEKA TAJNA VEZA = 'img/izveduvaci/648.jpg';
        const STO TE NEMA = 'img/izveduvaci/649.jpg';
        const SVE SMO MOGLI MI = 'img/izveduvaci/650.jpg';
        const JA SAM TI JEDINI DRUG = 'img/izveduvaci/651.jpg';
        const NA OBALI = 'img/izveduvaci/652.jpg';
        const SKITNICA = 'img/izveduvaci/653.jpg';
        const DODZI U MALI KAFE = 'img/izveduvaci/654.jpg';
        const GOVOR TVOGA TELA = 'img/izveduvaci/655.jpg';
        const LJULJAJ ME NEZNO = 'img/izveduvaci/656.jpg';
        const PROBAJ ME = 'img/izveduvaci/657.jpg';
        const GDE DA POBEGNEM = 'img/izveduvaci/658.jpg';
        const MARIJA = 'img/izveduvaci/659.jpg';
        const MOZDA NEBO ZNA = 'img/izveduvaci/660.jpg';
        const S KIM CEKAS DAN = 'img/izveduvaci/661.jpg';
        const VINO CRVENO = 'img/izveduvaci/662.jpg';
        const IVANA = 'img/izveduvaci/663.jpg';
        const DODJI = 'img/izveduvaci/664.jpg';
        const DOK SI PORED MENE = 'img/izveduvaci/665.jpg';
        const GODINE PROLAZE = 'img/izveduvaci/666.jpg';
        const JESEN U MENI = 'img/izveduvaci/667.jpg';
        const KADA ME DOTAKNE = 'img/izveduvaci/668.jpg';
        const KAO TI = 'img/izveduvaci/669.jpg';
        const LJUBAVNA = 'img/izveduvaci/670.jpg';
        const LUTKA ZA BAL = 'img/izveduvaci/671.jpg';
        const MOJA JE PJESMA LAGANA = 'img/izveduvaci/672.jpg';
        const NEDA = 'img/izveduvaci/673.jpg';
        const PROKLETA NEDELJA = 'img/izveduvaci/674.jpg';
        const SVE JOS MIRISE NA NJU = 'img/izveduvaci/675.jpg';
        const U LJUBAV VJERUJEM = 'img/izveduvaci/676.jpg';
        const UGASI ME = 'img/izveduvaci/677.jpg';
        const UHVATI RITAM = 'img/izveduvaci/678.jpg';
        const ZASTAVE = 'img/izveduvaci/679.jpg';
        const STRANICE DNEVNIKA = 'img/izveduvaci/680.jpg';
        const DOLAZIM ZA 5 MINUTA = 'img/izveduvaci/681.jpg';
        const NAJ JACI OSTAJU = 'img/izveduvaci/682.jpg';
        const POVEDI ME U NOC = 'img/izveduvaci/683.jpg';
        const SVEMU DODJE KRAJ = 'img/izveduvaci/684.jpg';
        const TI I JA = 'img/izveduvaci/685.jpg';
        const BI MOGO DA MOGU = 'img/izveduvaci/686.jpg';
        const ENA = 'img/izveduvaci/687.jpg';
        const MOJA PRVA LJUBAV = 'img/izveduvaci/688.jpg';
        const SAL OD SVILE = 'img/izveduvaci/689.jpg';
        const SEJN = 'img/izveduvaci/690.jpg';
        const UZALUD PITAS = 'img/izveduvaci/691.jpg';
        const LAGANO UMIREM = 'img/izveduvaci/692.jpg';
        const CEKALA SAM = 'img/izveduvaci/693.jpg';
        const NE LOMI ME = 'img/izveduvaci/694.jpg';
        const RUZMARIN = 'img/izveduvaci/695.jpg';
        const SVE LJUBAVI SU TUZNE = 'img/izveduvaci/696.jpg';
        const CINI MI SE DA = 'img/izveduvaci/697.jpg';
        const KADA SANJAMO = 'img/izveduvaci/698.jpg';
        const NEVERNA SI = 'img/izveduvaci/699.jpg';
        const TO JE SUDBINA = 'img/izveduvaci/700.jpg';
        const KAO PTICA NA MOM DLANU = 'img/izveduvaci/701.jpg';
        const TAJNA JE U TEBI SKRIVENA = 'img/izveduvaci/702.jpg';
        const ZABORAVLJENI = 'img/izveduvaci/703.jpg';
        const AKO SU TO SAMO BILE LAZI = 'img/izveduvaci/704.jpg';
        const BOLJE BITI PIJAN NEGO STAR = 'img/izveduvaci/705.jpg';
        const KAJA = 'img/izveduvaci/706.jpg';
        const LJUBI SE ISTOK I ZAPAD = 'img/izveduvaci/707.jpg';
        const LOVAC I KOSUTA = 'img/izveduvaci/708.jpg';
        const GRUDI BALKANSKE = 'img/izveduvaci/709.jpg';
        const NATASA = 'img/izveduvaci/710.jpg';
        const VRATI SE = 'img/izveduvaci/711.jpg';
        const FRIDA = 'img/izveduvaci/712.jpg';
        const JEDNA MALA PLAVA = 'img/izveduvaci/713.jpg';
        const PRINCEZA FT.DADO TOPIC = 'img/izveduvaci/714.jpg';
        const ODLAZIM = 'img/izveduvaci/715.jpg';
        const SAVA TIHO TECE = 'img/izveduvaci/716.jpg';
        const SUADA = 'img/izveduvaci/717.jpg';
        const ZELENE SU BILE OCI TE = 'img/izveduvaci/718.jpg';
        const DECKO AJDE OLADI = 'img/izveduvaci/719.jpg';
        const SRCE OD MEDA = 'img/izveduvaci/720.jpg';
        const TAXI = 'img/izveduvaci/721.jpg';
        const JELENI UMIRU SAMI = 'img/izveduvaci/722.jpg';
        const IZ NEKIH STARIH RAZLOGA = 'img/izveduvaci/723.jpg';
        const NE ZOVI MAMA DOKTORA = 'img/izveduvaci/724.jpg';
        const CRNO BIJELI SVIJET = 'img/izveduvaci/725.jpg';
        const KISE JESENJE = 'img/izveduvaci/726.jpg';
        const KORAK OD SNA = 'img/izveduvaci/727.jpg';
        const MA KOG ME BOGA ZA TEBE PITAJU = 'img/izveduvaci/728.jpg';
        const MARINA = 'img/izveduvaci/729.jpg';
        const MI PLESEMO = 'img/izveduvaci/730.jpg';
        const MOJ BIJELI LABUDE = 'img/izveduvaci/731.jpg';
        const S VREMENA NA VRIJEME = 'img/izveduvaci/732.jpg';
        const UZALUD VAM TRUD SVIRACI = 'img/izveduvaci/733.jpg';
        const ZAUSTAVITE ZEMLJU = 'img/izveduvaci/734.jpg';
        const AKO TRAZIS NEKOGA = 'img/izveduvaci/735.jpg';
        const TU NOC KAD SI SE UDAVALA = 'img/izveduvaci/736.jpg';
        const ZBOG MENE NE PLACI = 'img/izveduvaci/737.jpg';
        const LOLA = 'img/izveduvaci/738.jpg';
        const TUZNA SU ZELENA POLJA = 'img/izveduvaci/739.jpg';
        const JA VOLIM SAMO SEBE = 'img/izveduvaci/740.jpg';
        const ANDREA = 'img/izveduvaci/741.jpg';
        const AL KAPONE = 'img/izveduvaci/742.jpg';
        const AMSTERDAM = 'img/izveduvaci/743.jpg';
        const AVIONU SLOMICU TI KRILA = 'img/izveduvaci/744.jpg';
        const DOBRO JUTRO = 'img/izveduvaci/745.jpg';
        const DVA DINARA DRUZE = 'img/izveduvaci/746.jpg';
        const GDE SI U OVOM GLUPOM HOTELU = 'img/izveduvaci/747.jpg';
        const JA JE GLEDAM KAKO SPAVA = 'img/izveduvaci/748.jpg';
        const JA SAM SE LOZIO NA TEBE = 'img/izveduvaci/749.jpg';
        const KAD HODAS = 'img/izveduvaci/750.jpg';
        const KAD SAM BIO MLAD = 'img/izveduvaci/751.jpg';
        const KADA PADNE NOC  = 'img/izveduvaci/752.jpg';
        const KAKO JE LEPO BITI GLUP = 'img/izveduvaci/753.jpg';
        const LUTKA SA NASLOVNE STRANE = 'img/izveduvaci/754.jpg';
        const NA ZAPADU NISTA NOVO = 'img/izveduvaci/755.jpg';
        const NEMOJ DA IDES MOJOM ULICOM = 'img/izveduvaci/756.jpg';
        const NEMOJ SRECO NEMOJ DANAS = 'img/izveduvaci/757.jpg';
        const OSTACU SLOBODAN = 'img/izveduvaci/758.jpg';
        const OSTANI DZUBRE DO KRAJA = 'img/izveduvaci/759.jpg';
        const POGLEDAJ DOM SVOJ ANDJELE = 'img/izveduvaci/760.jpg';
        const PRAVILA PRAVILA = 'img/izveduvaci/761.jpg';
        const VOLIM VOLIM ZENE = 'img/izveduvaci/762.jpg';
        const COKOLADA = 'img/izveduvaci/763.jpg';
        const DEVOJKO MALA = 'img/izveduvaci/764.jpg';
        const MALENA = 'img/izveduvaci/765.jpg';
        const ONA TO ZNA = 'img/izveduvaci/766.jpg';
        const BACILA JE SVE NIZ RIJEKU = 'img/izveduvaci/767.jpg';
        const BALADA = 'img/izveduvaci/768.jpg';
        const DA SAM JA NETKO = 'img/izveduvaci/769.jpg';
        const PREDAJ SE SRCE = 'img/izveduvaci/770.jpg';
        const SANJAM = 'img/izveduvaci/771.jpg';
        const SVE OVE GODINE = 'img/izveduvaci/772.jpg';
        const TI SI MI BILA NAJ, NAJ = 'img/izveduvaci/773.jpg';
        const DANAS SAM LUDA = 'img/izveduvaci/774.jpg';
        const DOBRE VIBRACIJE = 'img/izveduvaci/775.jpg';
        const GDJE DUNAV LJUBI NEBO = 'img/izveduvaci/776.jpg';
        const MAGLA = 'img/izveduvaci/777.jpg';
        const NOCNA PTICA = 'img/izveduvaci/778.jpg';
        const O JEDNOJ MLADOSTI = 'img/izveduvaci/779.jpg';
        const RUSILA SAM MOSTOVE FT.DINO DVORNIK = 'img/izveduvaci/780.jpg';
        const CAO, AMORE FT.VLADO KALEMBAR = 'img/izveduvaci/781.jpg';
        const POVEDI ME = 'img/izveduvaci/782.jpg';
        const ANA = 'img/izveduvaci/783.jpg';
        const JA NISAM KOCKAR = 'img/izveduvaci/784.jpg';
        const ZAKUNI SE LJUBAVI = 'img/izveduvaci/785.jpg';
        const CRNA DAMA = 'img/izveduvaci/786.jpg';
        const DAIRE = 'img/izveduvaci/787.jpg';
        const KOKETA = 'img/izveduvaci/788.jpg';
        const VOLIO SAM TANJU = 'img/izveduvaci/789.jpg';
        const S VREMENA NA VREME = 'img/izveduvaci/790.jpg';
        const KOFER LJUBAVI = 'img/izveduvaci/791.jpg';
        const RODJENI = 'img/izveduvaci/792.jpg';
        const DALEKO = 'img/izveduvaci/793.jpg';
        const DUSO MOJA = 'img/izveduvaci/794.jpg';
        const JEDNE NOCI U DECEMBRU = 'img/izveduvaci/795.jpg';
        const NAPISI JEDNU LJUBAVNU = 'img/izveduvaci/796.jpg';
        const NIJE HTJELA = 'img/izveduvaci/797.jpg';
        const OVAKO NE MOGU DALJE = 'img/izveduvaci/798.jpg';
        const VRATIO SAM SE ZIVOTE = 'img/izveduvaci/799.jpg';
        const BOLJE DA SAM DRUGE LJUBIO = 'img/izveduvaci/800.jpg';
        const COVEK OD MEDA = 'img/izveduvaci/801.jpg';
        const HAJDE DA SE VOLIMO = 'img/izveduvaci/802.jpg';
        const NA RASKRSCU = 'img/izveduvaci/803.jpg';
        const RATNE IGRE = 'img/izveduvaci/804.jpg';
        const PLAVUSA = 'img/izveduvaci/805.jpg';
        const ZBOG JEDNE DIVNE CRNE ZENE = 'img/izveduvaci/806.jpg';
        const POKRENI ME = 'img/izveduvaci/807.jpg';
        const SIZIKA = 'img/izveduvaci/808.jpg';
        const AJDE AJDE JASMINA = 'img/izveduvaci/809.jpg';
        const APRIL U BEOGRADU = 'img/izveduvaci/810.jpg';
        const CINI MI SE GRMI = 'img/izveduvaci/811.jpg';
        const DA TI KAZEM STA MI JE = 'img/izveduvaci/812.jpg';
        const GORI VATRA = 'img/izveduvaci/813.jpg';
        const KAD BI MOJA BILA = 'img/izveduvaci/814.jpg';
        const MADJARICA = 'img/izveduvaci/815.jpg';
        const MALO POJACAJ RADIO = 'img/izveduvaci/816.jpg';
        const PISACU JOJ PISMA DUGA = 'img/izveduvaci/817.jpg';
        const RIJEKA SUZA I NA NJOJ LADJA = 'img/izveduvaci/818.jpg';
        const RUSKA = 'img/izveduvaci/819.jpg';
        const SINOC NISI BILA TU = 'img/izveduvaci/820.jpg';
        const STA MI RADIS = 'img/izveduvaci/821.jpg';
        const ZIVIS U OBLACIMA = 'img/izveduvaci/822.jpg';
        const DA LI ZNAS DA TE VOLIM = 'img/izveduvaci/823.jpg';
        const MAKEDONIJA = 'img/izveduvaci/824.jpg';
        const ZDENKA KOVACICEK = 'img/izveduvaci/825.jpg';
        const SEDAMNEST TI JE GODINA FT.HARI MATA HARI = 'img/izveduvaci/826.jpg';
        const DVIJE ZVJEZDICE = 'img/izveduvaci/827.jpg';
        const MILION GODINA = 'img/izveduvaci/828.jpg';
        const MOJ MALI JE OPASAN = 'img/izveduvaci/829.jpg';
        const NEMA VISE LJUBAVI = 'img/izveduvaci/830.jpg';
        const MOJA POSLEDNJA I PRVA LJUBAVI = 'img/izveduvaci/831.jpg';
        const PRIJATELJI STARI GDJE STE = 'img/izveduvaci/832.jpg';
        const DESET GODINA = 'img/izveduvaci/833.jpg';
        const SRCE SRNE KOJA DRHTI = 'img/izveduvaci/834.jpg';
        const KRILA LEPTIRA = 'img/izveduvaci/835.jpg';
        const BILO MI JE LIJEPO S TOBOM = 'img/izveduvaci/836.jpg';
        const NE MOZE TO TAKO = 'img/izveduvaci/837.jpg';
        const NE DAJ MI DA GOVORIM U SNU = 'img/izveduvaci/838.jpg';
        const OKA TVOJA DVA = 'img/izveduvaci/839.jpg';
        const DETEKTIVSKA PRICA = 'img/izveduvaci/840.jpg';
        const IZNENADI ME = 'img/izveduvaci/841.jpg';
        const OD ZLATA JABUKA = 'img/izveduvaci/842.jpg';
        const TOTALNO DRUKCIJI OD DRUGIH = 'img/izveduvaci/843.jpg';
        const VLAK = 'img/izveduvaci/844.jpg';
        const DUNAVOM JOS SIBAJU VETROVI = 'img/izveduvaci/845.jpg';
        const KOME SE RADUJES = 'img/izveduvaci/846.jpg';
        const MORNAR = 'img/izveduvaci/847.jpg';
        const ODLAZIM = 'img/izveduvaci/848.jpg';
        const CRNI LEPTIR = 'img/izveduvaci/849.jpg';
        const ZA MILION GODINA = 'img/izveduvaci/850.jpg';
        const BALADA O PISONJI I ZUGI = 'img/izveduvaci/851.jpg';
        const DJEVOJCICE KOJIMA MIRISE KOZA = 'img/izveduvaci/852.jpg';
        const HADZIJA ILI BOS = 'img/izveduvaci/853.jpg';
        const JUGO 45 = 'img/izveduvaci/854.jpg';
        const MOZES IMAT MOJE TIJELO = 'img/izveduvaci/855.jpg';
        const ZENICA BLUES  = 'img/izveduvaci/857.jpg';
        const DODIRNI MI KOLENA = 'img/izveduvaci/858.jpg';
        const JABUKE I VINO = 'img/izveduvaci/859.jpg';
        const MAJSTOR ZA POLJUPCE = 'img/izveduvaci/860.jpg';
        const MLADICU MOJ = 'img/izveduvaci/861.jpg';
        const HAJDE DA LUDUJEMO = 'img/izveduvaci/862.jpg';
        const TI NEMAS PRAVA NA MENE = 'img/izveduvaci/863.jpg';
        const NE BOJIM SE DRUGOVA TVOGA FRAJERA = 'img/izveduvaci/864.jpg';
        const STVARI LAGANE = 'img/izveduvaci/865.jpg';
        const TI ME IZLUDUJES = 'img/izveduvaci/866.jpg';
        const A TI SI MANGUP = 'img/izveduvaci/867.jpg';
        const IMA JEDAN SVIJET = 'img/izveduvaci/868.jpg';
        const SVE JE NEOBICNO AKO TE VOLIM = 'img/izveduvaci/869.jpg';
        const STIPU GATIBO = 'img/izveduvaci/870.jpg';
        const STO NE ZNAM GDE SI SAD = 'img/izveduvaci/871.jpg';
        const VOJAN POSTA = 'img/izveduvaci/872.jpg';
        const ZNAM I OSECAM = 'img/izveduvaci/873.jpg';
        const OZENICES SE TI = 'img/izveduvaci/874.jpg';
        const RUKUJU SE RUKUJU = 'img/izveduvaci/875.jpg';
        const ZANA VEJTE SNEGOVI = 'img/izveduvaci/876.jpg';
        const RAT I MIR = 'img/izveduvaci/877.jpg';
        const ARIJA = 'img/izveduvaci/878.jpg';
        const BARAKUDA = 'img/izveduvaci/879.jpg';
        const DAJ NE PITAJ = 'img/izveduvaci/880.jpg';
        const SAMO TERAJ TI PO SVOME = 'img/izveduvaci/881.jpg';
        const VINO NA USNAMA = 'img/izveduvaci/882.jpg';
        const TROJE = 'img/izveduvaci/883.jpg';
        const NIKAD TE NIKO NECE VOLJET KO JA = 'img/izveduvaci/884.jpg';
        const NEKO TE IMA = 'img/izveduvaci/885.jpg';
        const ZLATNA RIBICA = 'img/izveduvaci/886.jpg';
        const PONEKAD NOCU DOK SPAVA GRAD = 'img/izveduvaci/887.jpg';
        const IDU PTICE SELICE = 'img/izveduvaci/888.jpg';
        const NE MOGU NE MOGU = 'img/izveduvaci/889.jpg';
        const PILE MOJE = 'img/izveduvaci/890.jpg';
        const SAMO SKLOPI OKICE = 'img/izveduvaci/891.jpg';
        const VOLIM TE JOS = 'img/izveduvaci/892.jpg';
        const IZGLEDA DA MI SMO SAMI = 'img/izveduvaci/893.jpg';
        const KOLIKO IMAS GODINA = 'img/izveduvaci/894.jpg';
        const NOVE GODINE = 'img/izveduvaci/895.jpg';
        const O JE = 'img/izveduvaci/896.jpg';
        const SIDJI DO REKE = 'img/izveduvaci/897.jpg';
        const JUZNJACI = 'img/izveduvaci/898.jpg';
        const OKANO = 'img/izveduvaci/899.jpg';
        const PRAVA STVAR = 'img/izveduvaci/900.jpg';
        const PUSI PUSTI MODU = 'img/izveduvaci/901.jpg';
        const TI MOZES SVE = 'img/izveduvaci/902.jpg';
        const TI SI MI U KRVI = 'img/izveduvaci/903.jpg';
        const AJDE AJDE IDI = 'img/izveduvaci/904.jpg';
        const HOTEL BALKAN  = 'img/izveduvaci/905.jpg';
        const KRASIVA = 'img/izveduvaci/906.jpg';
        const NOC MI TE DUGUJE = 'img/izveduvaci/907.jpg';
        const OJ DEVOJKO SELEN VELEN = 'img/izveduvaci/908.jpg';
        const JEDINA = 'img/izveduvaci/909.jpg';
        const LOSE VINO = 'img/izveduvaci/910.jpg';
        const PJEVAM DANJU PJEVAM NOCU = 'img/izveduvaci/911.jpg';
        const ZVAO SAM JE EMILI = 'img/izveduvaci/912.jpg';
        const CAJE SUKARIJE = 'img/izveduvaci/913.jpg';
        const CIJA JE ONO ZVIJEZDA = 'img/izveduvaci/914.jpg';
        const E DRAGA DRAGA = 'img/izveduvaci/915.jpg';
        const GLAVO LUDA = 'img/izveduvaci/916.jpg';
        const JEDNA ZIMA SA KRISTINOM = 'img/izveduvaci/917.jpg';
        const MASLINASTO ZELENA = 'img/izveduvaci/918.jpg';
        const MASTILO I VODA = 'img/izveduvaci/919.jpg';
        const NEGDJE NA DNU SRCA = 'img/izveduvaci/920.jpg';
        const PRODUZI DALJE = 'img/izveduvaci/921.jpg';
        const STANICA PODLUGOVI = 'img/izveduvaci/922.jpg';
        const ZAGRLI ME = 'img/izveduvaci/923.jpg';
        const ZBOG TEBE = 'img/izveduvaci/924.jpg';
        const DA JE SRECE BILO = 'img/izveduvaci/925.jpg';
        const KUCKA NEVERNA = 'img/izveduvaci/926.jpg';
        const MENE TJERA NEKI VRAG = 'img/izveduvaci/927.jpg';
        const OPROSTI MI STO TE VOLIM = 'img/izveduvaci/928.jpg';
        const TIJANA = 'img/izveduvaci/929.jpg';
        const SINOC SAM POLA KAFANE POPIO = 'img/izveduvaci/930.jpg';
        const OVE NOCI JEDNA ZENA = 'img/izveduvaci/931.jpg';
        const GRADSKE CURE = 'img/izveduvaci/932.jpg';
        const KAKVA NOC = 'img/izveduvaci/933.jpg';
        const DOBRE DEVOJKE = 'img/izveduvaci/934.jpg';
        const JOS TE VOLIM = 'img/izveduvaci/935.jpg';
        const BALKANSKA ULICA = 'img/izveduvaci/936.jpg';
        const KAKO SAM TE VOLJELA = 'img/izveduvaci/937.jpg';
        const STO SAM JA STO SI TI = 'img/izveduvaci/938.jpg';
        const RANO = 'img/izveduvaci/939.jpg';
        const ROCK ME = 'img/izveduvaci/940.jpg';
        const KUCA PORED MORA = 'img/izveduvaci/941.jpg';
        const PJEVALI SMO PJESME STARE = 'img/izveduvaci/942.jpg';
        const POZOVI ME = 'img/izveduvaci/943.jpg';
        const IBRO DIRKA = 'img/izveduvaci/944.jpg';
        const MENI MAMA NE DA = 'img/izveduvaci/945.jpg';
        const RADOSTAN DAN = 'img/izveduvaci/946.jpg';
        const MOZDA MOZDA = 'img/izveduvaci/947.jpg';
        const LJUBAV NIJE ZA NAS = 'img/izveduvaci/948.jpg';
        const JEDAN COVEK JEDNA ZENA = 'img/izveduvaci/949.jpg';
        const GALEBOVI = 'img/izveduvaci/950.jpg';
        const JELENA = 'img/izveduvaci/951.jpg';
        const GLASNO GLASNIJE = 'img/izveduvaci/952.jpg';
        const OD SPLITA DO BEOGRADA FT.DINO DVORNIK = 'img/izveduvaci/953.jpg';
        const PISMO = 'img/izveduvaci/954.jpg';
        const DALMATINKA = 'img/izveduvaci/955.jpg';
        const KAZU MI DA SI JOS UVEK SAMA = 'img/izveduvaci/956.jpg';
        const PARISKI LOKAL = 'img/izveduvaci/957.jpg';
        const AJSA = 'img/izveduvaci/958.jpg';
        const ELIZABET = 'img/izveduvaci/959.jpg';
        const CUVAJ SE = 'img/izveduvaci/960.jpg';
        const JUBI SAN VASU KCER = 'img/izveduvaci/961.jpg';
        const PROLJECE BEZ TEBE = 'img/izveduvaci/962.jpg';
        const JEDNU MLADOST IMAM = 'img/izveduvaci/963.jpg';
        const HARMONIKA = 'img/izveduvaci/964.jpg';
        const JUGOSLOVENKA = 'img/izveduvaci/965.jpg';
        const RUSKA COKOLADA = 'img/izveduvaci/966.jpg';
        const JEDINO MOJE = 'img/izveduvaci/967.jpg';
        const DOK GITARA SVIRA = 'img/izveduvaci/968.jpg';
        


        //Ако не ја најде песната, тогаш изведувачот
        const AERODROM = 'img/izveduvaci/212.jpg';
        const ALEKSANDAR_MEZEK = 'img/izveduvaci/219.jpg';
        const SLADJANA_MILOSEVIC = 'img/izveduvaci/220.jpg';
        const ALEN_SLAVICA = 'img/izveduvaci/221.jpg';
        const ALISA = 'img/izveduvaci/223.jpg';
        const ALKA_VUJICA = 'img/izveduvaci/226.jpg';
        const AMBASADORI = 'img/izveduvaci/228.jpg';
        const ANIMATORI = 'img/izveduvaci/230.jpg';
        const ARSEN_DEDIC = 'img/izveduvaci/231.jpg';
        const ATOMSKO_SKLONISTE = 'img/izveduvaci/236.jpg';
        const AZRA = 'img/izveduvaci/239.jpg';
        const BABE = 'img/izveduvaci/246.jpg';
        const BAJAGA = 'img/izveduvaci/248.jpg';
        const BEBI_DOL = 'img/izveduvaci/280.jpg';
        const BIJELO_DUGME = 'img/izveduvaci/286.jpg';
        const BISERA_VELETANLIC = 'img/izveduvaci/326.jpg';
        const BOMBAJ_STAMPA = 'img/izveduvaci/328.jpg';
        const BORIS_NOVKOVIC = 'img/izveduvaci/329.jpg';
        const CRVENA_JABUKA = 'img/izveduvaci/339.jpg';
        const DADO_TOPIC = 'img/izveduvaci/361.jpg';
        const DALEKA_OBALA = 'img/izveduvaci/363.jpg';
        const DANIJELA_MARTINOVIC = 'img/izveduvaci/365.jpg';
        const DARKO_DOMIJAN = 'img/izveduvaci/368.jpg';
        const DENIS_DENIS = 'img/izveduvaci/372.jpg';
        const DINO_DVORNIK = 'img/izveduvaci/377.jpg';
        const DINO_MERLIN = 'img/izveduvaci/383.jpg';
        const DIVLJE_JAGODE = 'img/izveduvaci/427.jpg';
        const DJAVOLI = 'img/izveduvaci/433.jpg';
        const DJORDJE_BALASEVIC = 'img/izveduvaci/439.jpg';
        const DORIAN_GRAY = 'img/izveduvaci/466.jpg';
        const DORIS_DRAGOVIC = 'img/izveduvaci/467.jpg';
        const DRAZEN_ZECIC = 'img/izveduvaci/478.jpg';
        const DRUGI_NACIN = 'img/izveduvaci/479.jpg';
        const EKATERINA_VELIKA = 'img/izveduvaci/481.jpg';
        const ELEKTRICNI_ORGAZAM = 'img/izveduvaci/486.jpg';
        const FAMILIJA = 'img/izveduvaci/489.jpg';
        const ELVIRA_RAHIC = 'img/izveduvaci/482.jpg';
        const FILM = 'img/izveduvaci/493.jpg';
        const FIT = 'img/izveduvaci/504.jpg';
        const FRANO_LASIC = 'img/izveduvaci/507.jpg';
        const GABI_NOVAK = 'img/izveduvaci/510.jpg';
        const GIBONNI = 'img/izveduvaci/512.jpg';
        const HARI_MATA_HARI = 'img/izveduvaci/517.jpg';
        const LEB_I_SOL = 'img/izveduvaci/525.jpg';
        const LEO_MARTIN = 'img/izveduvaci/529.jpg';
        const LETECI_ODRED = 'img/izveduvaci/530.jpg';
        const MAGAZIN = 'img/izveduvaci/531.jpg';
        const MISO_KOVAC = 'img/izveduvaci/544.jpg';
        const GALIJA = 'img/izveduvaci/552.jpg';
        const GENERACIJA_5 = 'img/izveduvaci/560.jpg';
        const GRUPA_220 = 'img/izveduvaci/561.jpg';
        const IDOLI = 'img/izveduvaci/562.jpg';
        const HARI_MATA_HARI = 'img/izveduvaci/564.jpg';
        const MASSIMO_SAVIC = 'img/izveduvaci/576.jpg';
        const MERI_CETINIC = 'img/izveduvaci/577.jpg';
        const NEDA UKRADEN = 'img/izveduvaci/579.jpg';
        const NEKI_TO_VOLE_VRUCE = 'img/izveduvaci/580.jpg';
        const NENO BELAN = 'img/izveduvaci/582.jpg';
        const NOVI_FOSILI = 'img/izveduvaci/586.jpg';
        const OLIVER_MANDIC = 'img/izveduvaci/591.jpg';
        const OKTOBAR_1864 = 'img/izveduvaci/601.jpg';
        const OLIVER_DRAGOJEVIC = 'img/izveduvaci/605.jpg';
        const MILADIN_SOBIC = 'img/izveduvaci/643.jpg';
        

        //
        // ДОВРШИ ГИ СИТЕ ДРУГИ ИЗВЕДУВАЧИ
        //

        // треба да се стави препознавање на песна и промена во текст на DOM

    

        var artistRadio = info.artist.replace(/&apos;/g, '\'');
        if (artistRadio == 'FRATELLO') {
            var urlCoverArt = FRATELLO;
        }
        else if (artistRadio == 'BRAZIL'){
            var urlCoverArt = BRAZIL;
        }
        else if (artistRadio == 'DALEKO FT. KEMAL MONTENO'){
            var urlCoverArt = DALEKO_FT_KEMAL_MONTENO;
        }



        else 
        {
        var urlCoverArt = DEFAULT_COVER_ART;
	    }

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                var data = JSON.parse(this.responseText);
                var artworkUrl100 = (data.resultCount) ? data.results[0].artworkUrl100 : urlCoverArt;

                document.querySelectorAll('#historicSong article .cover-historic')[n].style.backgroundImage = 'url(' + artworkUrl100 + ')';
            }
            var music = info.song.replace(/&apos;/g, '\'');
            var songHist = music.replace(/&amp;/g, '&');

            var artist = info.artist.replace(/&apos;/g, '\'');
            var artistHist = artist.replace(/&amp;/g, '&');

            $songName[n].innerHTML = songHist;
            $artistName[n].innerHTML = artistHist;

            $historicDiv[n].classList.add('animated');
            $historicDiv[n].classList.add('slideInRight');
        }
        xhttp.open('GET', 'https://itunes.apple.com/search?term=' + info.artist + ' ' + info.song + '&media=music&limit=1', true);
        xhttp.send();

        setTimeout(function () {
            for (var j = 0; j < 2; j++) {
                $historicDiv[j].classList.remove('animated');
                $historicDiv[j].classList.remove('slideInRight');
            }
        }, 2000);
    }

    // Ковери на изведувачи - доле 
    this.refreshCover = function (song = '', artist) {
        const ALKA = "img/izveduvaci/226.jpg";
    
        if (artist  == 'ALKA VUJICA') {
            var urlCoverArt = ALKA;
        }

        else
        {
        var urlCoverArt = DEFAULT_COVER_ART;
	    }

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            var coverArt = document.getElementById('currentCoverArt');
            var coverBackground = document.getElementById('bgCover');

            if (this.readyState === 4 && this.status === 200) {
                var data = JSON.parse(this.responseText);
                var artworkUrl100 = (data.resultCount) ? data.results[0].artworkUrl100 : urlCoverArt;

                urlCoverArt = (artworkUrl100 != urlCoverArt) ? artworkUrl100.replace('100x100bb', '512x512bb') : urlCoverArt;
                var urlCoverArt96 = (artworkUrl100 != urlCoverArt) ? urlCoverArt.replace('512x512bb', '96x96bb') : urlCoverArt;
                var urlCoverArt128 = (artworkUrl100 != urlCoverArt) ? urlCoverArt.replace('512x512bb', '128x128bb') : urlCoverArt;
                var urlCoverArt192 = (artworkUrl100 != urlCoverArt) ? urlCoverArt.replace('512x512bb', '192x192bb') : urlCoverArt;
                var urlCoverArt256 = (artworkUrl100 != urlCoverArt) ? urlCoverArt.replace('512x512bb', '256x256bb') : urlCoverArt;
                var urlCoverArt384 = (artworkUrl100 != urlCoverArt) ? urlCoverArt.replace('512x512bb', '384x384bb') : urlCoverArt;

                coverArt.style.backgroundImage = 'url(' + urlCoverArt + ')';
                coverArt.className = 'animated bounceInLeft';

                coverBackground.style.backgroundImage = 'url(' + urlCoverArt + ')';

                setTimeout(function () {
                    coverArt.className = '';
                }, 2000);

                if ('mediaSession' in navigator) {
                    navigator.mediaSession.metadata = new MediaMetadata({
                        title: song,
                        artist: artist,
                        artwork: [{
                                src: urlCoverArt96,
                                sizes: '96x96',
                                type: 'image/png'
                            },
                            {
                                src: urlCoverArt128,
                                sizes: '128x128',
                                type: 'image/png'
                            },
                            {
                                src: urlCoverArt192,
                                sizes: '192x192',
                                type: 'image/png'
                            },
                            {
                                src: urlCoverArt256,
                                sizes: '256x256',
                                type: 'image/png'
                            },
                            {
                                src: urlCoverArt384,
                                sizes: '384x384',
                                type: 'image/png'
                            },
                            {
                                src: urlCoverArt,
                                sizes: '512x512',
                                type: 'image/png'
                            }
                        ]
                    });
                }
            }
        }
        xhttp.open('GET', 'https://itunes.apple.com/search?term=' + artist + ' ' + song + '&media=music&limit=1', true); // претражување на слики од iTunes
        xhttp.send();
    }

    this.changeVolumeIndicator = function (volume) {
        document.getElementById('volIndicator').innerHTML = volume;

        if (typeof (Storage) !== 'undefined') {
            localStorage.setItem('volume', volume);
        }
    }

    this.setVolume = function () {
        if (typeof (Storage) !== 'undefined') {
            var volumeLocalStorage = (!localStorage.getItem('volume')) ? 80 : localStorage.getItem('volume');
            document.getElementById('volume').value = volumeLocalStorage;
            document.getElementById('volIndicator').innerHTML = volumeLocalStorage;
        }
    }

     this.refreshLyric = function (currentSong, currentArtist) {
        var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                var data = JSON.parse(this.responseText);

                var openLyric = document.getElementsByClassName('lyrics')[0];

                 if (data.type === 'exact' || data.type === 'aprox') {
                    var lyric = data.mus[0].text;

                    document.getElementById('lyric').innerHTML = lyric.replace(/\n/g, '<br />');
                    openLyric.style.opacity = "1";
                    openLyric.setAttribute('data-toggle', 'modal');
                 } else {
                    openLyric.style.opacity = "0.3";
                    openLyric.removeAttribute('data-toggle');

                    var modalLyric = document.getElementById('modalLyrics');
                    modalLyric.style.display = "none";
                    modalLyric.setAttribute('aria-hidden', 'true');
                    (document.getElementsByClassName('modal-backdrop')[0]) ? document.getElementsByClassName('modal-backdrop')[0].remove(): '';
                }
             } else {
                document.getElementsByClassName('lyrics')[0].style.opacity = "0.3";
                 document.getElementsByClassName('lyrics')[0].removeAttribute('data-toggle');
             }
         }
         xhttp.open('GET', 'https://api.vagalume.com.br/search.php?apikey=' + API_KEY + '&art=' + currentArtist + '&mus=' + currentSong.toLowerCase(), true); // Од каде да ги чита текстовите за песните
         xhttp.send()
     }
}

var audio = new Audio(URL_STREAMING2);

function Player() {
    this.play = function () {
        audio.play();

        var defaultVolume = document.getElementById('volume').value;

        if (typeof (Storage) !== 'undefined') {
            if (localStorage.getItem('volume') !== null) {
                audio.volume = intToDecimal(localStorage.getItem('volume'));
            } else {
                audio.volume = intToDecimal(defaultVolume);
            }
        } else {
            audio.volume = intToDecimal(defaultVolume);
        }
        document.getElementById('volIndicator').innerHTML = defaultVolume;
    };

    this.pause = function () {
        audio.pause();
    };
}

audio.onplay = function () {
    var botao = document.getElementById('playerButton');

    if (botao.className === 'fa fa-play') {
        botao.className = 'fa fa-pause';
    }
}

audio.onpause = function () {
    var botao = document.getElementById('playerButton');

    if (botao.className === 'fa fa-pause') {
        botao.className = 'fa fa-play';
    }
}

audio.onvolumechange = function () {
    if (audio.volume > 0) {
        audio.muted = false;
    }
}

audio.onerror = function () {
    var confirmacao = confirm('Грешка при комуникацијата со серверот. \nКликни ОК и продолжи пак.');

    if (confirmacao) {
        window.location.reload();
    }
}

document.getElementById('volume').oninput = function () {
    audio.volume = intToDecimal(this.value);

    var page = new Page();
    page.changeVolumeIndicator(this.value);
}

function togglePlay() {
    if (!audio.paused) {
        audio.pause();
    } else {
        audio.load();
        audio.play();
    }
}

function volumeUp() {
    var vol = audio.volume;
    if(audio) {
        if(audio.volume >= 0 && audio.volume < 1) {
            audio.volume = (vol + .01).toFixed(2);
        }
    }
}

function volumeDown() {
    var vol = audio.volume;
    if(audio) {
        if(audio.volume >= 0.01 && audio.volume <= 1) {
            audio.volume = (vol - .01).toFixed(2);
        }
    }
}

function mute() {
    if (!audio.muted) {
        document.getElementById('volIndicator').innerHTML = 0;
        document.getElementById('volume').value = 0;
        audio.volume = 0;
        audio.muted = true;
    } else {
        var localVolume = localStorage.getItem('volume');
        document.getElementById('volIndicator').innerHTML = localVolume;
        document.getElementById('volume').value = localVolume;
        audio.volume = intToDecimal(localVolume);
        audio.muted = false;
    }
}

function getStreamingData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === 4 && this.status === 200) {

            if(this.response.length === 0) {
                console.log('%cdebug', 'font-size: 22px')
            }

            var data = JSON.parse(this.responseText);

            var page = new Page();

            var currentSongElement = document.getElementById('currentSong');

            let song = data.currentSong.replace(/&apos;/g, '\'');
            currentSong = song.replace(/&amp;/g, '&');

            let artist = data.currentArtist.replace(/&apos;/g, '\'');
            currentArtist = artist.replace(/&amp;/g, '&');

            document.title = currentSong + ' - ' + currentArtist + ' | ' + RADIO_NAME;

            if (currentSongElement.innerText !== song.trim()) {
                page.refreshCover(currentSong, currentArtist);
                page.refreshCurrentSong(currentSong, currentArtist);
                page.refreshLyric(currentSong, currentArtist);

                for (var i = 0; i < 2; i++) {
                    page.refreshHistoric(data.songHistory[i], i);
                }
            }
        } 
    };

    var d = new Date();

    xhttp.open('GET', 'api.php?url=' + URL_STREAMING + '&streamtype=' + STREAMING_TYPE + '&historic=' + HISTORIC + '&next=' + NEXT_SONG + '&t=' + d.getTime(), true);
    xhttp.send();
}

document.addEventListener('keydown', function (k) {
    var k = k || window.event;
    var key = k.keyCode || k.which;
    
    var slideVolume = document.getElementById('volume');

    var page = new Page();

    switch (key) {
        // Arrow up
        case 38:
            volumeUp();
            slideVolume.value = decimalToInt(audio.volume);
            page.changeVolumeIndicator(decimalToInt(audio.volume));
            break;
        // Arrow down
        case 40:
            volumeDown();
            slideVolume.value = decimalToInt(audio.volume);
            page.changeVolumeIndicator(decimalToInt(audio.volume));
            break;
        // Spacebar
        case 32:
            togglePlay();
            break;
        // P
        case 80:
            togglePlay();
            break;
        // M
        case 77:
            mute();
            break;
        // 0
        case 48:
            audio.volume = 0;
            slideVolume.value = 0;
            page.changeVolumeIndicator(0);
            break;
        // 0 numeric keyboard
        case 96:
            audio.volume = 0;
            slideVolume.value = 0;
            page.changeVolumeIndicator(0);
            break;
        // 1
        case 49:
            audio.volume = .1;
            slideVolume.value = 10;
            page.changeVolumeIndicator(10);
            break;
        // 1 numeric key
        case 97:
            audio.volume = .1;
            slideVolume.value = 10;
            page.changeVolumeIndicator(10);
            break;
        // 2
        case 50:
            audio.volume = .2;
            slideVolume.value = 20;
            page.changeVolumeIndicator(20);
            break;
        // 2 numeric key
        case 98:
            audio.volume = .2;
            slideVolume.value = 20;
            page.changeVolumeIndicator(20);
            break;
        // 3
        case 51:
            audio.volume = .3;
            slideVolume.value = 30;
            page.changeVolumeIndicator(30);
            break;
        // 3 numeric key
        case 99:
            audio.volume = .3;
            slideVolume.value = 30;
            page.changeVolumeIndicator(30);
            break;
        // 4
        case 52:
            audio.volume = .4;
            slideVolume.value = 40;
            page.changeVolumeIndicator(40);
            break;
        // 4 numeric key
        case 100:
            audio.volume = .4;
            slideVolume.value = 40;
            page.changeVolumeIndicator(40);
            break;
        // 5
        case 53:
            audio.volume = .5;
            slideVolume.value = 50;
            page.changeVolumeIndicator(50);
            break;
        // 5 numeric key
        case 101:
            audio.volume = .5;
            slideVolume.value = 50;
            page.changeVolumeIndicator(50);
            break;
        // 6 
        case 54:
            audio.volume = .6;
            slideVolume.value = 60;
            page.changeVolumeIndicator(60);
            break;
        // 6 numeric key
        case 102:
            audio.volume = .6;
            slideVolume.value = 60;
            page.changeVolumeIndicator(60);
            break;
        // 7
        case 55:
            audio.volume = .7;
            slideVolume.value = 70;
            page.changeVolumeIndicator(70);
            break;
        // 7 numeric key
        case 103:
            audio.volume = .7;
            slideVolume.value = 70;
            page.changeVolumeIndicator(70);
            break;
        // 8
        case 56:
            audio.volume = .8;
            slideVolume.value = 80;
            page.changeVolumeIndicator(80);
            break;
        // 8 numeric key
        case 104:
            audio.volume = .8;
            slideVolume.value = 80;
            page.changeVolumeIndicator(80);
            break;
        // 9
        case 57:
            audio.volume = .9;
            slideVolume.value = 90;
            page.changeVolumeIndicator(90);
            break;
        // 9 numeric key
        case 105:
            audio.volume = .9;
            slideVolume.value = 90;
            page.changeVolumeIndicator(90);
            break;
    }
});

function intToDecimal(vol) {
    return vol / 100;
}

function decimalToInt(vol) {
    return vol * 100;
}

// Движечки елементи
var textWrapper = document.querySelector('.ml7 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml7 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 2550, // колку да врти на почеток
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml7',
    opacity: 0,
    duration: 20000,
    easing: "easeOutExpo",
    delay: 1000
  });