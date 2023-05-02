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
        const OBICNA_LJUBAVNA_PJESMA = 'img/izveduvaci/215.jpg';
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
        const SARENE_PILULE = 'img/izveduvaci/264.jpg';
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
        const IMA_NESTO_OD_SRCA_DO_SRCA = 'img/izveduvaci/355.jpg';
        const AKO_AKO = 'img/izveduvaci/356.jpg';
        const SVIDJA_MI_SE_OVA_STVAR = 'img/izveduvaci/357.jpg';
        const PRINCIPESSA = 'img/izveduvaci/358.jpg';
        const NEMA_VISE_VREMENA = 'img/izveduvaci/359.jpg';
        const S_TVOJIH_USANA = 'img/izveduvaci/360.jpg';
        const FLOYD = 'img/izveduvaci/361.jpg';
        const JA_HOCU_ZIVOT = 'img/izveduvaci/362.jpg';
        const NOC_JE_PREKRASNA = 'img/izveduvaci/363.jpg';
        const DZULI = 'img/izveduvaci/364.jpg';
        const NEKA_MI_NE_SVANE = 'img/izveduvaci/365.jpg';
        const DA_JE_SALDJE_ZASPATI = 'img/izveduvaci/366.jpg';
        const ULICA_JORGOVANA = 'img/izveduvaci/367.jpg';
        const JA_BIH_DA_PEVAM = 'img/izveduvaci/368.jpg';
        const JULIJA = 'img/izveduvaci/369.jpg';
        const LETNJE_KISE = 'img/izveduvaci/370.jpg';
        const OAZA_SNOVA = 'img/izveduvaci/371.jpg';
        const SOBA_23 = 'img/izveduvaci/372.jpg';
        const PROGRAM_TVOG_KOMPJUTERA = 'img/izveduvaci/373.jpg';
        const VOLI_ME_JOS_OVU_NOC = 'img/izveduvaci/374.jpg';
        const JA_SAM_LAZLJIVA = 'img/izveduvaci/375.jpg';
        const U_RITMU_ME_OKRENI = 'img/izveduvaci/376.jpg';
        const TI_SI_MI_U_MISLIMA = 'img/izveduvaci/377.jpg';
        const TEBI_PRIPADAM = 'img/izveduvaci/378.jpg';
        const LJUBAV_SE_ZOVE_IMENOM_TVOIM = 'img/izveduvaci/379.jpg';
        const NECU_DA_ZNAM_ZA_NIKOG_OSIM_TEBE = 'img/izveduvaci/380.jpg';
        const JACE_MANIJACE = 'img/izveduvaci/381.jpg';
        const UMRI_PRIJE_SMRTI = 'img/izveduvaci/382.jpg';
        const SREDINOM = 'img/izveduvaci/383.jpg';
        const MOJ_JE_ZIVOT_SVICARSKA = 'img/izveduvaci/384.jpg';
        const SVE_JE_LAZ = 'img/izveduvaci/385.jpg';
        const GODINAMA = 'img/izveduvaci/386.jpg';
        const KAD_SI_REKLA_DA_ME_VOLIS = 'img/izveduvaci/387.jpg';
        const HITNA = 'img/izveduvaci/388.jpg';
        const DA_JE_TUGA_SNIJEG = 'img/izveduvaci/389.jpg';
        const KREMEN = 'img/izveduvaci/390.jpg';
        const KAD_COVIJEK_VOLI_ZENU = 'img/izveduvaci/391.jpg';
        const STA_TI_ZNACIM_JA = 'img/izveduvaci/392.jpg';
        const DANAS_SAM_OK = 'img/izveduvaci/393.jpg';
        const BOSNOM_BEHAR_PROBEHARAO = 'img/izveduvaci/394.jpg';
        const OBICNA_LJUBAVNAPJESMA = 'img/izveduvaci/395.jpg';
        const ASTA_DA_RADIM = 'img/izveduvaci/396.jpg';
        const DIGNI_MEVISOKO = 'img/izveduvaci/397.jpg';
        const FRAT_ELLO = 'img/izveduvaci/398.jpg';
        const STAVI_PRAVUSTVAR = 'img/izveduvaci/399.jpg';
        const STA_SI_MI_UKAVU_STAVILA = 'img/izveduvaci/400.jpg';
        const NESTO_LIJEPO_TREBA_DA_SE_DESI = 'img/izveduvaci/401.jpg';
        const MJESECINA = 'img/izveduvaci/402.jpg';
        const JEL_SARAJEVO_GDE_JE_NEKAD_BILO = 'img/izveduvaci/403.jpg';
        const KAD_ZAMIRISU_JORGOVANI_FT_VESNA_ZMIJANAC = 'img/izveduvaci/404.jpg';
        const ZAR_JE_TO_SVE_STO_IMAM_OD_TEBE = 'img/izveduvaci/405.jpg';
        const JA_POTPUNO_TRIJEZAN_UMIREM = 'img/izveduvaci/406.jpg';
        const NE_ZOVI_ME_NA_GRIJEH = 'img/izveduvaci/407.jpg';
        const NEMAM_JA_18_GODINA = 'img/izveduvaci/408.jpg';
        const KOKUZNA_VREMENA = 'img/izveduvaci/409.jpg';
        const JA_SAM_NA_TE_NAVIKO = 'img/izveduvaci/410.jpg';
        const UCINI_MI_PRAVU_STVAR = 'img/izveduvaci/411.jpg';
        const SA_MOJIH_USANA = 'img/izveduvaci/412.jpg';
        const DA_SUTIS = 'img/izveduvaci/413.jpg';
        const OTKRIT_CU_TI_TAJNU = 'img/izveduvaci/414.jpg';
        const DESET_MLADJA = 'img/izveduvaci/415.jpg';
        const OSTAT_CE_ISTINE_DVIJE = 'img/izveduvaci/416.jpg';
        const AKO_ME_IKADA_SRETNES = 'img/izveduvaci/417.jpg';
        const ZABORAVI = 'img/izveduvaci/418.jpg';
        const MOJA_BOGDA_SNA = 'img/izveduvaci/419.jpg';
        const BASKA_TI = 'img/izveduvaci/420.jpg';
        const SMIJEHOM_STRAH_POKRIJEM = 'img/izveduvaci/421.jpg';
        const NEK_PADAJU_CUSKIJE = 'img/izveduvaci/422.jpg';
        const ISPOCETKA = 'img/izveduvaci/423.jpg';
        const SVE_DOK_TE_BUDE_IMALO = 'img/izveduvaci/424.jpg';
        const LAZU_ME = 'img/izveduvaci/425.jpg';
        const LELO = 'img/izveduvaci/426.jpg';
        const MARIJA = 'img/izveduvaci/427.jpg';
        const KAKO_SI_TOPLA_I_MILA = 'img/izveduvaci/428.jpg';
        const KRIVO_JE_MORE = 'img/izveduvaci/429.jpg';
        const JEDINA_MOJA = 'img/izveduvaci/430.jpg';
        const ZAUVJEK_TVOJ = 'img/izveduvaci/431.jpg';
        const VOLI_TE_TVOJA_ZVER = 'img/izveduvaci/432.jpg';
        const OSTANI_UZ_MENE = 'img/izveduvaci/433.jpg';
        const BAMBINA = 'img/izveduvaci/434.jpg';
        const DANI_LJUBAVI = 'img/izveduvaci/435.jpg';
        const IVONA = 'img/izveduvaci/436.jpg';
        const JAGODE_I_COKOLADA = 'img/izveduvaci/437.jpg';
        const PRICAJ_MI_O_LJUBAVI = 'img/izveduvaci/438.jpg';
        const ANDJELA_MOJA_JE_DRAGA_VESTICA = 'img/izveduvaci/439.jpg';
        const BOZA_ZVANI_PUB = 'img/izveduvaci/440.jpg';
        const DEVOJKA_SA_CARDAS_NOGAMA = 'img/izveduvaci/441.jpg';
        const DIVLJI_BADEM = 'img/izveduvaci/442.jpg';
        const D_MOLL = 'img/izveduvaci/443.jpg';
        const JA_LUZER = 'img/izveduvaci/444.jpg';
        const JAROSLAVA_PRINCEZO_JAVI_SE = 'img/izveduvaci/445.jpg';
        const LEPA_PROTINA_KCI = 'img/izveduvaci/446.jpg';
        const LJERKA = 'img/izveduvaci/447.jpg';
        const NE_LOMITE_MI_BAGRENJE = 'img/izveduvaci/448.jpg';
        const NE_VOLIM_JANUAR = 'img/izveduvaci/449.jpg';
        const NEKI_NOVI_KLINCI = 'img/izveduvaci/450.jpg';
        const NEVERNIK = 'img/izveduvaci/451.jpg';
        const NIKAD_KAO_BANE = 'img/izveduvaci/452.jpg';
        const OLELOLE = 'img/izveduvaci/453.jpg';
        const OPROSTI_MI_KATRIN = 'img/izveduvaci/454.jpg';
        const PA_DOBRO_GDE_SI_TI = 'img/izveduvaci/455.jpg';
        const PORTRET_MOG_ZIVOTA = 'img/izveduvaci/456.jpg';
        const PROVINCIJALKA = 'img/izveduvaci/457.jpg';
        const PRVA_LJUBAV = 'img/izveduvaci/458.jpg';
        const RINGISPIL = 'img/izveduvaci/459.jpg';
        const SIN_JEDINAC = 'img/izveduvaci/460.jpg';
        const SLABO_DIVANIM_MADZARSKI = 'img/izveduvaci/461.jpg';
        const SLOVENSKA = 'img/izveduvaci/462.jpg';
        const SVIRAJTE_MI_JESEN_STIZE_DUNJO_MOJA = 'img/izveduvaci/463.jpg';
        const USPAVANKA_ZA_DECAKA = 'img/izveduvaci/464.jpg';
        const OLIVERA = 'img/izveduvaci/465.jpg';
        const SJAJ_U_TAMI = 'img/izveduvaci/466.jpg';
        const SAKOM_O_STOL = 'img/izveduvaci/467.jpg';
        const JA_NOCAS_UMIREM = 'img/izveduvaci/468.jpg';
        const KRIVI_LJUDI = 'img/izveduvaci/469.jpg';
        const MALO_MI_ZA_SRICU_TRIBA = 'img/izveduvaci/470.jpg';
        const MARIJA_MAGDALENA = 'img/izveduvaci/471.jpg';
        const MORAM = 'img/izveduvaci/472.jpg';
        const PETAK = 'img/izveduvaci/473.jpg';
        const TO = 'img/izveduvaci/474.jpg';
        const ZELJO_MOJA = 'img/izveduvaci/475.jpg';
        const NI_DA_MORA_NESTANE = 'img/izveduvaci/476.jpg';
        const STAJE_OD_MENE_OSTALO = 'img/izveduvaci/477.jpg';
        const IMA_LI_NADE_ZA_NAS_FT_ANDJELA_ZECIC = 'img/izveduvaci/478.jpg';
        const PISI_MI = 'img/izveduvaci/479.jpg';
        const PRODJE_OVAJ_DAN = 'img/izveduvaci/480.jpg';
        const PAR_GODINA_ZA_NAS = 'img/izveduvaci/481.jpg';
        const SRCE = 'img/izveduvaci/482.jpg';
        const OCI_BOJE_MEDA = 'img/izveduvaci/483.jpg';
        const TI_SI_SAV_MOJ_BOL = 'img/izveduvaci/484.jpg';
        const KRUG = 'img/izveduvaci/485.jpg';
        const DA_SI_TAKO_JAKA = 'img/izveduvaci/486.jpg';
        const BEJBE_TI_NISI_TU = 'img/izveduvaci/487.jpg';
        const IGRA_ROCK_NN_ROLL_CELA_JUGOSLAVIJA = 'img/izveduvaci/488.jpg';
        const MALA_MALA_MALA_GRUPA_PEDERA = 'img/izveduvaci/489.jpg';
        const PARANOJA = 'img/izveduvaci/490.jpg';
        const STO_JA_VOLIM_TAJ_SEX = 'img/izveduvaci/491.jpg';
        const A_SADA_IDEM_FT_TIFA = 'img/izveduvaci/492.jpg';
        const BOJE_SU_U_NAMA = 'img/izveduvaci/493.jpg';
        const DOCI_CU_TI_U_SNOVIMA = 'img/izveduvaci/494.jpg';
        const LIJEPO_LIJEPO_NEOPISIVO = 'img/izveduvaci/495.jpg';
        const NJEZNO_NJEZNO_NJEZNIJE = 'img/izveduvaci/496.jpg';
        const PJEVAJMO_DO_ZORE = 'img/izveduvaci/497.jpg';
        const ZAMISLI_ZIVOT_U_RITMU_MUZIKE_ZA_PLES = 'img/izveduvaci/498.jpg';
        const DOBRE_VIBRACIJE = 'img/izveduvaci/499.jpg';
        const SRCE_NA_CESTI = 'img/izveduvaci/500.jpg';
        const MI_NISMO_SAMI = 'img/izveduvaci/501.jpg';
        const SJECAM_SE_PRVOG_POLJUPCA = 'img/izveduvaci/502.jpg';
        const LJUBAV_JE_ZAKON = 'img/izveduvaci/503.jpg';
        const MACKA = 'img/izveduvaci/504.jpg';
        const ZABORAVIT_CU_SVE = 'img/izveduvaci/505.jpg';
        const ZVONI_TELEFON = 'img/izveduvaci/506.jpg';
        const VOLIM_TE_BUDALO_MALA = 'img/izveduvaci/507.jpg';
        const ZAGRLJENI = 'img/izveduvaci/508.jpg';
        const PAMTIM_SAMO_SRETNE_DANE = 'img/izveduvaci/509.jpg';
        const ON_ME_VOLI_NA_SVOJ_NACIN = 'img/izveduvaci/510.jpg';
        const VINO_I_GITARE = 'img/izveduvaci/511.jpg';
        const CINIM_PRAVU_STVAR = 'img/izveduvaci/512.jpg';
        const DVIJE_DUSE = 'img/izveduvaci/513.jpg';
        const ISPOD_MOGA_PRAMCA = 'img/izveduvaci/514.jpg';
        const OVO_MI_JE_SKOLA = 'img/izveduvaci/515.jpg';
        const SUVISE_SAM_NJEN = 'img/izveduvaci/516.jpg';
        const BAS_TI_LIJEPO_STOJE_SUZE = 'img/izveduvaci/517.jpg';
        const HEJ_KAKO_SI = 'img/izveduvaci/518.jpg';
        const JAVI_SE = 'img/izveduvaci/519.jpg';
        const KAD_DODJE_OKTOBAR = 'img/izveduvaci/520.jpg';
        const KAO_DOMINE = 'img/izveduvaci/521.jpg';
        const CUVAM_NOC_OD_BUDNIH = 'img/izveduvaci/522.jpg';
        const FEMME_FATALE = 'img/izveduvaci/523.jpg';
        const KAO_KAKAO = 'img/izveduvaci/524.jpg';
        const MAMURNI_LJUDI = 'img/izveduvaci/525.jpg';
        const SKOPJE = 'img/izveduvaci/526.jpg';
        const UCI_ME_MAJKO_KARAJ_ME = 'img/izveduvaci/527.jpg';
        const CUKNI_VO_DRVO = 'img/izveduvaci/528.jpg';
        const IMA_VREMENA = 'img/izveduvaci/529.jpg';
        const SANJAO_SAM_MOJ_RUZICU = 'img/izveduvaci/530.jpg';
        const GUTLJAJ_VINA = 'img/izveduvaci/531.jpg';
        const JEL_ZBOG_NJE = 'img/izveduvaci/532.jpg';
        const KOKOLO = 'img/izveduvaci/533.jpg';
        const LJUBE_SE_DOBRI_LOSI_ZLI = 'img/izveduvaci/534.jpg';
        const MINUT_SRCA_TVOG = 'img/izveduvaci/535.jpg';
        const OKO_MOJE_SANJIVO = 'img/izveduvaci/536.jpg';
        const OPIJUM = 'img/izveduvaci/537.jpg';
        const PUT_PUTUJEM = 'img/izveduvaci/538.jpg';
        const RANO_RANIJE = 'img/izveduvaci/539.jpg';
        const SUZE_BISERNE = 'img/izveduvaci/540.jpg';
        const SVE_BI_SEKE_LJUBILE_MORNARE = 'img/izveduvaci/541.jpg';
        const TAMARA = 'img/izveduvaci/542.jpg';
        const AKO_ME_OSTAVIS = 'img/izveduvaci/543.jpg';
        const JA_NEMAM_VISE_RAZLOGA_DA_ZIVIM = 'img/izveduvaci/544.jpg';
        const JEDAN_DAN_ZIVOTA = 'img/izveduvaci/545.jpg';
        const JOS_I_DANAS_TEKU_SUZE_JEDNE_ZENE = 'img/izveduvaci/546.jpg';
        const MALO_MI_JE_JEDAN_ZIVOT_S_TOBOM = 'img/izveduvaci/547.jpg';
        const NIKOGA_NISAM_VOLIO_TAKO = 'img/izveduvaci/548.jpg';
        const OSTALA_SI_UVIJEK_ISTA = 'img/izveduvaci/549.jpg';
        const SVI_PEVAJU_JA_NE_CUJEM = 'img/izveduvaci/550.jpg';
        const TI_SI_PJESMA_MOJE_DUSE = 'img/izveduvaci/551.jpg';
        const DALI_SI_SPAVALA = 'img/izveduvaci/552.jpg';
        const DA_ME_NISI = 'img/izveduvaci/553.jpg';
        const DIGNI_RUKU = 'img/izveduvaci/554.jpg';
        const DODIRNI_ME = 'img/izveduvaci/555.jpg';
        const KAD_ME_POGLEDAS = 'img/izveduvaci/556.jpg';
        const KOTOR = 'img/izveduvaci/557.jpg';
        const SKADARSKA = 'img/izveduvaci/558.jpg';
        const TRUBE = 'img/izveduvaci/559.jpg';
        const TI_SAMO_BUDI_DOVOLJNO_DALEKO = 'img/izveduvaci/560.jpg';
        const OSMIJEH = 'img/izveduvaci/561.jpg';
        const KENOZOIK = 'img/izveduvaci/562.jpg';
        const MALJCHIKI = 'img/izveduvaci/563.jpg';
        const LEJLA = 'img/izveduvaci/564.jpg';
        const LUD_SAM_ZA_TOBOM = 'img/izveduvaci/565.jpg';
        const NEK_NEBO_NAM_SUDI = 'img/izveduvaci/566.jpg';
        const OSTAVI_SUZE_ZA_KRAJ = 'img/izveduvaci/567.jpg';
        const OTKAD_TEBE_NEMA = 'img/izveduvaci/568.jpg';
        const RODJENA_SI_SAMO_ZA_MENE = 'img/izveduvaci/569.jpg';
        const RUZMARIN = 'img/izveduvaci/570.jpg';
        const STRAH_ME_DA_TE_VOLIM = 'img/izveduvaci/571.jpg';
        const SVE_LJUBAVI_SU_TUZNE = 'img/izveduvaci/572.jpg';
        const SVI_MOJI_DRUMOVI = 'img/izveduvaci/573.jpg';
        const TI_ZNAS_SVE = 'img/izveduvaci/574.jpg';
        const VOLIO_BI_DA_TE_NE_VOLIM = 'img/izveduvaci/575.jpg';
        const STRANAC_U_NOCI = 'img/izveduvaci/576.jpg';
        const POTRAZI_ME_U_PREDGRADU = 'img/izveduvaci/577.jpg';
        const SAMO_SIMPATIJA = 'img/izveduvaci/578.jpg';
        const ZORA_JE = 'img/izveduvaci/579.jpg';
        const STO_CE_TAJ_COVJEK_TU = 'img/izveduvaci/580.jpg';
        const TESKA_VREMENA_PRIJATELJU_MOJ = 'img/izveduvaci/581.jpg';
        const DOTAKNI_ME_USNAMA = 'img/izveduvaci/582.jpg';
        const RIJEKA_SNOVA = 'img/izveduvaci/583.jpg';
        const SUNCAN_DAN = 'img/izveduvaci/584.jpg';
        const KAVANNA_FT_FIUMENS = 'img/izveduvaci/585.jpg';
        const NAJDRAZE_MOJE = 'img/izveduvaci/586.jpg';
        const PLAVA_KOSULJA = 'img/izveduvaci/587.jpg';
        const SUTI_MOJ_DJECACE_PLAVI = 'img/izveduvaci/588.jpg';
        const ZA_DOBRA_STARA_VREMENA = 'img/izveduvaci/589.jpg';
        const ZNAM = 'img/izveduvaci/590.jpg';
        const BICU_TVOJ = 'img/izveduvaci/591.jpg';
        const BOBANE = 'img/izveduvaci/592.jpg';
        const DODJE_MI_DA_VRISNEM_TVOJE_IME = 'img/izveduvaci/593.jpg';
        const NIJE_ZA_NJU = 'img/izveduvaci/594.jpg'
        const ODLAZIM_A_VOLIM_TE = 'img/izveduvaci/595.jpg';
        const OSLONI_SE_NE_MENE = 'img/izveduvaci/596.jpg';
        const PITAJU_ME_PITAJU = 'img/izveduvaci/597.jpg';
        const POMAGAJTE_DRUGOVI = 'img/izveduvaci/598.jpg';
        const SMEJEM_SE_A_PLAKAO_BIH = 'img/izveduvaci/599.jpg';
        const ZBOG_TEBE_BIH_TUCAO_KAMEN = 'img/izveduvaci/600.jpg';
        const CRNI_PLES = 'img/izveduvaci/601.jpg';
        const DENIS = 'img/izveduvaci/602.jpg';
        const NADJI_ME = 'img/izveduvaci/603.jpg';
        const SAM = 'img/izveduvaci/604.jpg';
        const BROD_U_BOCI = 'img/izveduvaci/605.jpg';
        const CESARICA = 'img/izveduvaci/606.jpg';
        const DVAPUT_SAN_UMRA = 'img/izveduvaci/607.jpg';
        const KAD_MI_DODZES_TI = 'img/izveduvaci/608.jpg';
        const NEBO_MOJE = 'img/izveduvaci/609.jpg';
        const NEDOSTAJES_MI_TI = 'img/izveduvaci/610.jpg';
        const NOCTURNO = 'img/izveduvaci/611.jpg';
        const PISMO_MOJA = 'img/izveduvaci/612.jpg';
        const PRED_TVOJIM_VRATIMA = 'img/izveduvaci/613.jpg';
        const STINE = 'img/izveduvaci/614.jpg';
        const STO_TO_BJESE_LJUBAV = 'img/izveduvaci/615.jpg';
        const SVE_BI_DA_ZA_NJU = 'img/izveduvaci/616.jpg';
        const SVIRAJTE_NOCAS_ZA_MOJU_DUSU = 'img/izveduvaci/617.jpg';
        const TRAG_U_BESKRAJU = 'img/izveduvaci/618.jpg';
        const VJERUJ_U_LJUBAV = 'img/izveduvaci/619.jpg';
        const U_LJUBAV_VJERE_NEMAM_FT_GIBONNI = 'img/izveduvaci/620.jpg';
        const DZENI = 'img/izveduvaci/621.jpg';
        const E_DA_SI_BAREM_NOCAS_OVDJE = 'img/izveduvaci/622.jpg';
        const E_MOJ_SASA = 'img/izveduvaci/623.jpg';
        const JA_SAM_ZA_PLES = 'img/izveduvaci/624.jpg';
        const JESEN_JE = 'img/izveduvaci/625.jpg';
        const MILENA = 'img/izveduvaci/626.jpg';
        const CARTE_BLANCHE = 'img/izveduvaci/627.jpg';
        const BEZ_TEBE = 'img/izveduvaci/628.jpg';
        const DITELINA_S_CETRI_LISTA = 'img/izveduvaci/629.jpg';
        const JEDAN_OD_MNOGIH = 'img/izveduvaci/630.jpg';
        const CALIFORNIA = 'img/izveduvaci/631.jpg';
        const JEANS_GENERACIJA = 'img/izveduvaci/632.jpg';
        const KAKVA_NOC = 'img/izveduvaci/633.jpg';
        const DZEMPER_ZA_VINOGRAD = 'img/izveduvaci/634.jpg';
        const KAD_BI_DOSLA_MARIJA = 'img/izveduvaci/635.jpg';
        const OD_DRUGA_DO_DRUGA = 'img/izveduvaci/636.jpg';
        const VINO_NOCI_FT_DEMODE = 'img/izveduvaci/637.jpg';
        const KOLACICI = 'img/izveduvaci/638.jpg';
        const DA_MI_JE_BITI_MORSKI_PAS = 'img/izveduvaci/639.jpg';
        const AKO_JEDNOM_VIDIS_MARIJU = 'img/izveduvaci/640.jpg';
        const KAD_BIH_ZNAO_DA_JE_SAMA = 'img/izveduvaci/641.jpg';
        const AKO_OVO_JE_KRAJ_FT_DAVOR_DRAGOJEVIC = 'img/izveduvaci/642.jpg';
        const APSOLUTNO_TVOJ = 'img/izveduvaci/643.jpg';
        const JA_IMAM_TE_A_KO_DA_NEMAM_TE = 'img/izveduvaci/644.jpg';
        const PRSTEN_I_ZLATNI_LANAC = 'img/izveduvaci/645.jpg';
        const STO_JE_BILO_BILO_JE = 'img/izveduvaci/646.jpg';
        const ZUTE_DUNJE = 'img/izveduvaci/647.jpg';
        const IMA_NEKA_TAJNA_VEZA = 'img/izveduvaci/648.jpg';
        const STO_TE_NEMA = 'img/izveduvaci/649.jpg';
        const SVE_SMO_MOGLI_MI = 'img/izveduvaci/650.jpg';
        const JA_SAM_TI_JEDINI_DRUG = 'img/izveduvaci/651.jpg';
        const NA_OBALI = 'img/izveduvaci/652.jpg';
        const SKITNICA = 'img/izveduvaci/653.jpg';
        const DODZI_U_MALI_KAFE = 'img/izveduvaci/654.jpg';
        const GOVOR_TVOGA_TELA = 'img/izveduvaci/655.jpg';
        const LJULJAJ_ME_NEZNO = 'img/izveduvaci/656.jpg';
        const PROBAJ_ME = 'img/izveduvaci/657.jpg';
        const GDE_DA_POBEGNEM = 'img/izveduvaci/658.jpg';
        const MARIJA = 'img/izveduvaci/659.jpg';
        const MOZDA_NEBO_ZNA = 'img/izveduvaci/660.jpg';
        const S_KIM_CEKAS_DAN = 'img/izveduvaci/661.jpg';
        const VINO_CRVENO = 'img/izveduvaci/662.jpg';
        const IVANA = 'img/izveduvaci/663.jpg';
        const DODJI = 'img/izveduvaci/664.jpg';
        const DOK_SI_PORED_MENE = 'img/izveduvaci/665.jpg';
        const GODINE_PROLAZE = 'img/izveduvaci/666.jpg';
        const JESEN_U_MENI = 'img/izveduvaci/667.jpg';
        const KADA_ME_DOTAKNE = 'img/izveduvaci/668.jpg';
        const KAO_TI = 'img/izveduvaci/669.jpg';
        const LJUBAVNA = 'img/izveduvaci/670.jpg';
        const LUTKA_ZA_BAL = 'img/izveduvaci/671.jpg';
        const MOJA_JE_PJESMA_LAGANA = 'img/izveduvaci/672.jpg';
        const NEDA = 'img/izveduvaci/673.jpg';
        const PROKLETA_NEDELJA = 'img/izveduvaci/674.jpg';
        const SVE_JOS_MIRISE_NA_NJU = 'img/izveduvaci/675.jpg';
        const U_LJUBAV_VJERUJEM = 'img/izveduvaci/676.jpg';
        const UGASI_ME = 'img/izveduvaci/677.jpg';
        const UHVATI_RITAM = 'img/izveduvaci/678.jpg';
        const ZASTAVE = 'img/izveduvaci/679.jpg';
        const STRANICE_DNEVNIKA = 'img/izveduvaci/680.jpg';
        const DOLAZIM_ZA_5_MINUTA = 'img/izveduvaci/681.jpg';
        const NAJ_JACI_OSTAJU = 'img/izveduvaci/682.jpg';
        const POVEDI_ME_U_NOC = 'img/izveduvaci/683.jpg';
        const SVEMU_DODJE_KRAJ = 'img/izveduvaci/684.jpg';
        const TI_I_JA = 'img/izveduvaci/685.jpg';
        const BI_MOGO_DA_MOGU = 'img/izveduvaci/686.jpg';
        const ENA = 'img/izveduvaci/687.jpg';
        const MOJA_PRVA_LJUBAV = 'img/izveduvaci/688.jpg';
        const SAL_OD_SVILE = 'img/izveduvaci/689.jpg';
        const SEJN = 'img/izveduvaci/690.jpg';
        const UZALUD_PITAS = 'img/izveduvaci/691.jpg';
        const LAGANO_UMIREM = 'img/izveduvaci/692.jpg';
        const CEKALA_SAM = 'img/izveduvaci/693.jpg';
        const NE_LOMI_ME = 'img/izveduvaci/694.jpg';
        const RUZMARIN = 'img/izveduvaci/695.jpg';
        const SVE_LJUBAVI_SU_TUZNE = 'img/izveduvaci/696.jpg';
        const CINI_MI_SE_DA = 'img/izveduvaci/697.jpg';
        const KADA_SANJAMO = 'img/izveduvaci/698.jpg';
        const NEVERNA_SI = 'img/izveduvaci/699.jpg';
        const TO_JE_SUDBINA = 'img/izveduvaci/700.jpg';
        const KAO_PTICA_NA_MOM_DLANU = 'img/izveduvaci/701.jpg';
        const TAJNA_JE_U_TEBI_SKRIVENA = 'img/izveduvaci/702.jpg';
        const ZABORAVLJENI = 'img/izveduvaci/703.jpg';
        const AKO_SU_TO_SAMO_BILE_LAZI = 'img/izveduvaci/704.jpg';
        const BOLJE_BITI_PIJAN_NEGO_STAR = 'img/izveduvaci/705.jpg';
        const KAJA = 'img/izveduvaci/706.jpg';
        const LJUBI_SE_ISTOK_I_ZAPAD = 'img/izveduvaci/707.jpg';
        const LOVAC_I_KOSUTA = 'img/izveduvaci/708.jpg';
        const GRUDI_BALKANSKE = 'img/izveduvaci/709.jpg';
        const NATASA = 'img/izveduvaci/710.jpg';
        const VRATI_SE = 'img/izveduvaci/711.jpg';
        const FRIDA = 'img/izveduvaci/712.jpg';
        const JEDNA_MALA_PLAVA = 'img/izveduvaci/713.jpg';
        const PRINCEZA_FT_DADO_TOPIC = 'img/izveduvaci/714.jpg';
        const ODLAZIM = 'img/izveduvaci/715.jpg';
        const SAVA_TIHO_TECE = 'img/izveduvaci/716.jpg';
        const SUADA = 'img/izveduvaci/717.jpg';
        const ZELENE_SU_BILE_OCI_TE = 'img/izveduvaci/718.jpg';
        const DECKO_AJDE_OLADI = 'img/izveduvaci/719.jpg';
        const SRCE_OD_MEDA = 'img/izveduvaci/720.jpg';
        const TAXI = 'img/izveduvaci/721.jpg';
        const JELENI_UMIRU_SAMI = 'img/izveduvaci/722.jpg';
        const IZ_NEKIH_STARIH_RAZLOGA = 'img/izveduvaci/723.jpg';
        const NE_ZOVI_MAMA_DOKTORA = 'img/izveduvaci/724.jpg';
        const CRNO_BIJELI_SVIJET = 'img/izveduvaci/725.jpg';
        const KISE_JESENJE = 'img/izveduvaci/726.jpg';
        const KORAK_OD_SNA = 'img/izveduvaci/727.jpg';
        const MA_KOG_ME_BOGA_ZA_TEBE_PITAJU = 'img/izveduvaci/728.jpg';
        const MAR_INA = 'img/izveduvaci/729.jpg';
        const MI_PLESEMO = 'img/izveduvaci/730.jpg';
        const MOJ_BIJELI_LABUDE = 'img/izveduvaci/731.jpg';
        const S_VREMENA_NA_VRIJEME = 'img/izveduvaci/732.jpg';
        const UZALUD_VAM_TRUD_SVIRACI = 'img/izveduvaci/733.jpg';
        const ZAUSTAVITE_ZEMLJU = 'img/izveduvaci/734.jpg';
        const AKO_TRAZIS_NEKOGA = 'img/izveduvaci/735.jpg';
        const TU_NOC_KAD_SI_SE_UDAVALA = 'img/izveduvaci/736.jpg';
        const ZBOG_MENE_NE_PLACI = 'img/izveduvaci/737.jpg';
        const LOLA = 'img/izveduvaci/738.jpg';
        const TUZNA_SU_ZELENA_POLJA = 'img/izveduvaci/739.jpg';
        const JA_VOLIM_SAMO_SEBE = 'img/izveduvaci/740.jpg';
        const ANDREA = 'img/izveduvaci/741.jpg';
        const AL_KAPONE = 'img/izveduvaci/742.jpg';
        const AMSTERDAM = 'img/izveduvaci/743.jpg';
        const AVIONU_SLOMICU_TI_KRILA = 'img/izveduvaci/744.jpg';
        const DOBRO_JUTRO = 'img/izveduvaci/745.jpg';
        const DVA_DINARA_DRUZE = 'img/izveduvaci/746.jpg';
        const GDE_SI_U_OVOM_GLUPOM_HOTELU = 'img/izveduvaci/747.jpg';
        const JA_JE_GLEDAM_KAKO_SPAVA = 'img/izveduvaci/748.jpg';
        const JA_SAM_SE_LOZIO_NA_TEBE = 'img/izveduvaci/749.jpg';
        const KAD_HODAS = 'img/izveduvaci/750.jpg';
        const KAD_SAM_BIO_MLAD = 'img/izveduvaci/751.jpg';
        const KADA_PADNE_NOC = 'img/izveduvaci/752.jpg';
        const KAKO_JE_LEPO_BITI_GLUP = 'img/izveduvaci/753.jpg';
        const LUTKA_SA_NASLOVNE_STRANE = 'img/izveduvaci/754.jpg';
        const NA_ZAPADU_NISTA_NOVO = 'img/izveduvaci/755.jpg';
        const NEMOJ_DA_IDES_MOJOM_ULICOM = 'img/izveduvaci/756.jpg';
        const NEMOJ_SRECO_NEMOJ_DANAS = 'img/izveduvaci/757.jpg';
        const OSTACU_SLOBODAN = 'img/izveduvaci/758.jpg';
        const OSTANI_DZUBRE_DO_KRAJA = 'img/izveduvaci/759.jpg';
        const POGLEDAJ_DOM_SVOJ_ANDJELE = 'img/izveduvaci/760.jpg';
        const PRAVILA_PRAVILA = 'img/izveduvaci/761.jpg';
        const VOLIM_VOLIM_ZENE = 'img/izveduvaci/762.jpg';
        const COKOLADA = 'img/izveduvaci/763.jpg';
        const DEVOJKO_MALA = 'img/izveduvaci/764.jpg';
        const MALENA = 'img/izveduvaci/765.jpg';
        const ONA_TO_ZNA = 'img/izveduvaci/766.jpg';
        const BACILA_JE_SVE_NIZ_RIJEKU = 'img/izveduvaci/767.jpg';
        const BALADA = 'img/izveduvaci/768.jpg';
        const DA_SAM_JA_NETKO = 'img/izveduvaci/769.jpg';
        const PREDAJ_SE_SRCE = 'img/izveduvaci/770.jpg';
        const SANJAM = 'img/izveduvaci/771.jpg';
        const SVE_OVE_GODINE = 'img/izveduvaci/772.jpg';
        const TI_SI_MI_BILA_NAJ_NAJ = 'img/izveduvaci/773.jpg';
        const DANAS_SAM_LUDA = 'img/izveduvaci/774.jpg';
        const DOBRE_VIBRACIJE = 'img/izveduvaci/775.jpg';
        const GDJE_DUNAV_LJUBI_NEBO = 'img/izveduvaci/776.jpg';
        const MAGLA = 'img/izveduvaci/777.jpg';
        const NOCNA_PTICA = 'img/izveduvaci/778.jpg';
        const O_JEDNOJ_MLADOSTI = 'img/izveduvaci/779.jpg';
        const RUSILA_SAM_MOSTOVE_FT_DINO_DVORNIK = 'img/izveduvaci/780.jpg';
        const CAO_AMORE_FT_VLADO_KALEMBAR = 'img/izveduvaci/781.jpg';
        const POVEDI_ME = 'img/izveduvaci/782.jpg';
        const ANA = 'img/izveduvaci/783.jpg';
        const JA_NISAM_KOCKAR = 'img/izveduvaci/784.jpg';
        const ZAKUNI_SE_LJUBAVI = 'img/izveduvaci/785.jpg';
        const CRNA_DAMA = 'img/izveduvaci/786.jpg';
        const DAIRE = 'img/izveduvaci/787.jpg';
        const KOKETA = 'img/izveduvaci/788.jpg';
        const VOLIO_SAM_TANJU = 'img/izveduvaci/789.jpg';
        const S_VREMENA_NA_VREME = 'img/izveduvaci/790.jpg';
        const KOFER_LJUBAVI = 'img/izveduvaci/791.jpg';
        const RODJENI = 'img/izveduvaci/792.jpg';
        const DALEKO = 'img/izveduvaci/793.jpg';
        const DUSO_MOJA = 'img/izveduvaci/794.jpg';
        const JEDNE_NOCI_U_DECEMBRU = 'img/izveduvaci/795.jpg';
        const NAPISI_JEDNU_LJUBAVNU = 'img/izveduvaci/796.jpg';
        const NIJE_HTJELA = 'img/izveduvaci/797.jpg';
        const OVAKO_NE_MOGU_DALJE = 'img/izveduvaci/798.jpg';
        const VRATIO_SAM_SE_ZIVOTE = 'img/izveduvaci/799.jpg';
        const BOLJE_DA_SAM_DRUGE_LJUBIO = 'img/izveduvaci/800.jpg';
        const COVEK_OD_MEDA = 'img/izveduvaci/801.jpg';
        const HAJDE_DA_SE_VOLIMO = 'img/izveduvaci/802.jpg';
        const NA_RASKRSCU = 'img/izveduvaci/803.jpg';
        const RATNE_IGRE = 'img/izveduvaci/804.jpg';
        const PLAVUSA = 'img/izveduvaci/805.jpg';
        const ZBOG_JEDNE_DIVNE_CRNE_ZENE = 'img/izveduvaci/806.jpg';
        const POKRENI_ME = 'img/izveduvaci/807.jpg';
        const SIZIKA = 'img/izveduvaci/808.jpg';
        const AJDE_AJDE_JASMINA = 'img/izveduvaci/809.jpg';
        const APRIL_U_BEOGRADU = 'img/izveduvaci/810.jpg';
        const CINI_MI_SE_GRMI = 'img/izveduvaci/811.jpg';
        const DA_TI_KAZEM_STA_MI_JE = 'img/izveduvaci/812.jpg';
        const GORI_VATRA = 'img/izveduvaci/813.jpg';
        const KAD_BI_MOJA_BILA = 'img/izveduvaci/814.jpg';
        const MADJARICA = 'img/izveduvaci/815.jpg';
        const MALO_POJACAJ_RADIO = 'img/izveduvaci/816.jpg';
        const PISACU_JOJ_PISMA_DUGA = 'img/izveduvaci/817.jpg';
        const RIJEKA_SUZA_I_NA_NJOJ_LADJA = 'img/izveduvaci/818.jpg';
        const RUSKA = 'img/izveduvaci/819.jpg';
        const SINOC_NISI_BILA_TU = 'img/izveduvaci/820.jpg';
        const STA_MI_RADIS = 'img/izveduvaci/821.jpg';
        const ZIVIS_U_OBLACIMA = 'img/izveduvaci/822.jpg';
        const DA_LI_ZNAS_DA_TE_VOLIM = 'img/izveduvaci/823.jpg';
        const MAKEDONIJA = 'img/izveduvaci/824.jpg';
        const ZDENKA_KOVACICEK = 'img/izveduvaci/825.jpg';
        const SEDAMNEST_TI_JE_GODINA_FT_HARI_MATA_HARI = 'img/izveduvaci/826.jpg';
        const DVIJE_ZVJEZDICE = 'img/izveduvaci/827.jpg';
        const MILION_GODINA = 'img/izveduvaci/828.jpg';
        const MOJ_MALI_JE_OPASAN = 'img/izveduvaci/829.jpg';
        const NEMA_VISE_LJUBAVI = 'img/izveduvaci/830.jpg';
        const MOJA_POSLEDNJA_I_PRVA_LJUBAVI = 'img/izveduvaci/831.jpg';
        const PRIJATELJI_STARI_GDJE_STE = 'img/izveduvaci/832.jpg';
        const DESET_GODINA = 'img/izveduvaci/833.jpg';
        const SRCE_SRNE_KOJA_DRHTI = 'img/izveduvaci/834.jpg';
        const KRILA_LEPTIRA = 'img/izveduvaci/835.jpg';
        const BILO_MI_JE_LIJEPO_S_TOBOM = 'img/izveduvaci/836.jpg';
        const NE_MOZE_TO_TAKO = 'img/izveduvaci/837.jpg';
        const NE_DAJ_MI_DA_GOVORIM_U_SNU = 'img/izveduvaci/838.jpg';
        const OKA_TVOJA_DVA = 'img/izveduvaci/839.jpg';
        const DETEKTIVSKA_PRICA = 'img/izveduvaci/840.jpg';
        const IZNENADI_ME = 'img/izveduvaci/841.jpg';
        const OD_ZLATA_JABUKA = 'img/izveduvaci/842.jpg';
        const TOTALNO_DRUKCIJI_OD_DRUGIH = 'img/izveduvaci/843.jpg';
        const VLAK = 'img/izveduvaci/844.jpg';
        const DUNAVOM_JOS_SIBAJU_VETROVI = 'img/izveduvaci/845.jpg';
        const KOME_SE_RADUJES = 'img/izveduvaci/846.jpg';
        const MORNAR = 'img/izveduvaci/847.jpg';
        const ODLAZIM = 'img/izveduvaci/848.jpg';
        const CRNI_LEPTIR = 'img/izveduvaci/849.jpg';
        const ZA_MILION_GODINA = 'img/izveduvaci/850.jpg';
        const BALADA_O_PISONJI_I_ZUGI = 'img/izveduvaci/851.jpg';
        const DJEVOJCICE_KOJIMA_MIRISE_KOZA = 'img/izveduvaci/852.jpg';
        const HADZIJA_ILI_BOS = 'img/izveduvaci/853.jpg';
        const JUGO_45 = 'img/izveduvaci/854.jpg';
        const MOZES_IMAT_MOJE_TIJELO = 'img/izveduvaci/855.jpg';
        const ZENICA_BLUES = 'img/izveduvaci/857.jpg';
        const DODIRNI_MI_KOLENA = 'img/izveduvaci/858.jpg';
        const JABUKE_I_VINO = 'img/izveduvaci/859.jpg';
        const MAJSTOR_ZA_POLJUPCE = 'img/izveduvaci/860.jpg';
        const MLADICU_MOJ = 'img/izveduvaci/861.jpg';
        const HAJDE_DA_LUDUJEMO = 'img/izveduvaci/862.jpg';
        const TI_NEMAS_PRAVA_NA_MENE = 'img/izveduvaci/863.jpg';
        const NE_BOJIM_SE_DRUGOVA_TVOGA_FRAJERA = 'img/izveduvaci/864.jpg';
        const STVARI_LAGANE = 'img/izveduvaci/865.jpg';
        const TI_ME_IZLUDUJES = 'img/izveduvaci/866.jpg';
        const A_TI_SI_MANGUP = 'img/izveduvaci/867.jpg';
        const IMA_JEDAN_SVIJET = 'img/izveduvaci/868.jpg';
        const SVE_JE_NEOBICNO_AKO_TE_VOLIM = 'img/izveduvaci/869.jpg';
        const STIPU_GATIBO = 'img/izveduvaci/870.jpg';
        const STO_NE_ZNAM_GDE_SI_SAD = 'img/izveduvaci/871.jpg';
        const VOJAN_POSTA = 'img/izveduvaci/872.jpg';
        const ZNAM_I_OSECAM = 'img/izveduvaci/873.jpg';
        const OZENICES_SE_TI = 'img/izveduvaci/874.jpg';
        const RUKUJU_SE_RUKUJU = 'img/izveduvaci/875.jpg';
        const ZANA_VEJTE_SNEGOVI = 'img/izveduvaci/876.jpg';
        const RAT_I_MIR = 'img/izveduvaci/877.jpg';
        const ARIJA = 'img/izveduvaci/878.jpg';
        const BARAKUDA = 'img/izveduvaci/879.jpg';
        const DAJ_NE_PITAJ = 'img/izveduvaci/880.jpg';
        const SAMO_TERAJ_TI_PO_SVOME = 'img/izveduvaci/881.jpg';
        const VINO_NA_USNAMA = 'img/izveduvaci/882.jpg';
        const TROJE = 'img/izveduvaci/883.jpg';
        const NIKAD_TE_NIKO_NECE_VOLJET_KO_JA = 'img/izveduvaci/884.jpg';
        const NEKO_TE_IMA = 'img/izveduvaci/885.jpg';
        const ZLATNA_RIBICA = 'img/izveduvaci/886.jpg';
        const PONEKAD_NOCU_DOK_SPAVA_GRAD = 'img/izveduvaci/887.jpg';
        const IDU_PTICE_SELICE = 'img/izveduvaci/888.jpg';
        const NE_MOGU_NE_MOGU = 'img/izveduvaci/889.jpg';
        const PILE_MOJE = 'img/izveduvaci/890.jpg';
        const SAMO_SKLOPI_OKICE = 'img/izveduvaci/891.jpg';
        const VOLIM_TE_JOS = 'img/izveduvaci/892.jpg';
        const IZGLEDA_DA_MI_SMO_SAMI = 'img/izveduvaci/893.jpg';
        const KOLIKO_IMAS_GODINA = 'img/izveduvaci/894.jpg';
        const NOVE_GODINE = 'img/izveduvaci/895.jpg';
        const O_JE = 'img/izveduvaci/896.jpg';
        const SIDJI_DO_REKE = 'img/izveduvaci/897.jpg';
        const JUZNJACI = 'img/izveduvaci/898.jpg';
        const OKANO = 'img/izveduvaci/899.jpg';
        const PRAVA_STVAR = 'img/izveduvaci/900.jpg';
        const PUSI_PUSTI MODU = 'img/izveduvaci/901.jpg';
        const TI_MOZES_SVE = 'img/izveduvaci/902.jpg';
        const TI_SI_MI_U_KRVI = 'img/izveduvaci/903.jpg';
        const AJDE_AJDE_IDI = 'img/izveduvaci/904.jpg';
        const HOTEL_BALKAN = 'img/izveduvaci/905.jpg';
        const KRASIVA = 'img/izveduvaci/906.jpg';
        const NOC_MI_TE_DUGUJE = 'img/izveduvaci/907.jpg';
        const OJ_DEVOJKO_SELEN_VELEN = 'img/izveduvaci/908.jpg';
        const JEDINA = 'img/izveduvaci/909.jpg';
        const LOSE_VINO = 'img/izveduvaci/910.jpg';
        const PJEVAM_DANJU_PJEVAM_NOCU = 'img/izveduvaci/911.jpg';
        const ZVAO_SAM_JE_EMILI = 'img/izveduvaci/912.jpg';
        const CAJE_SUKARIJE = 'img/izveduvaci/913.jpg';
        const CIJA_JE_ONO_ZVIJEZDA = 'img/izveduvaci/914.jpg';
        const E_DRAGA_DRAGA = 'img/izveduvaci/915.jpg';
        const GLAVO_LUDA = 'img/izveduvaci/916.jpg';
        const JEDNA_ZIMA_SA KRISTINOM = 'img/izveduvaci/917.jpg';
        const MASLINASTO_ZELENA = 'img/izveduvaci/918.jpg';
        const MASTILO_I_VODA = 'img/izveduvaci/919.jpg';
        const NEGDJE_NA_DNU_SRCA = 'img/izveduvaci/920.jpg';
        const PRODUZI_DALJE = 'img/izveduvaci/921.jpg';
        const STANICA_PODLUGOVI = 'img/izveduvaci/922.jpg';
        const ZAGRLI_ME = 'img/izveduvaci/923.jpg';
        const ZBOG_TEBE = 'img/izveduvaci/924.jpg';
        const DA_JE_SRECE_BILO = 'img/izveduvaci/925.jpg';
        const KUCKA_NEVERNA = 'img/izveduvaci/926.jpg';
        const MENE_TJERA_NEKI_VRAG = 'img/izveduvaci/927.jpg';
        const OPROSTI_MI_STO_TE_VOLIM = 'img/izveduvaci/928.jpg';
        const TIJANA = 'img/izveduvaci/929.jpg';
        const SINOC_SAM_POLA_KAFANE_POPIO = 'img/izveduvaci/930.jpg';
        const OVE_NOCI_JEDNA_ZENA = 'img/izveduvaci/931.jpg';
        const GRADSKE_CURE = 'img/izveduvaci/932.jpg';
        const KAKVA_NOC = 'img/izveduvaci/933.jpg';
        const DOBRE_DEVOJKE = 'img/izveduvaci/934.jpg';
        const JOS_TE_VOLIM = 'img/izveduvaci/935.jpg';
        const BALKANSKA_ULICA = 'img/izveduvaci/936.jpg';
        const KAKO_SAM_TE_VOLJELA = 'img/izveduvaci/937.jpg';
        const STO_SAM_JA_STO_SI_TI = 'img/izveduvaci/938.jpg';
        const RANO = 'img/izveduvaci/939.jpg';
        const ROCK_ME = 'img/izveduvaci/940.jpg';
        const KUCA_PORED_MORA = 'img/izveduvaci/941.jpg';
        const PJEVALI_SMO_PJESME_STARE = 'img/izveduvaci/942.jpg';
        const POZOVI_ME = 'img/izveduvaci/943.jpg';
        const IBRO_DIRKA = 'img/izveduvaci/944.jpg';
        const MENI_MAMA_NE_DA = 'img/izveduvaci/945.jpg';
        const RADOSTAN_DAN = 'img/izveduvaci/946.jpg';
        const MOZDA_MOZDA = 'img/izveduvaci/947.jpg';
        const LJUBAV_NIJE_ZA_NAS = 'img/izveduvaci/948.jpg';
        const JEDAN_COVEK_JEDNA_ZENA = 'img/izveduvaci/949.jpg';
        const GALEBOVI = 'img/izveduvaci/950.jpg';
        const JELENA = 'img/izveduvaci/951.jpg';
        const GLASNO_GLASNIJE = 'img/izveduvaci/952.jpg';
        const OD_SPLITA_DO_BEOGRADA_FT_DINO_DVORNIK = 'img/izveduvaci/953.jpg';
        const PISMO = 'img/izveduvaci/954.jpg';
        const DALMATINKA = 'img/izveduvaci/955.jpg';
        const KAZU_MI_DA_SI_JOS_UVEK_SAMA = 'img/izveduvaci/956.jpg';
        const PARISKI_LOKAL = 'img/izveduvaci/957.jpg';
        const AJSA = 'img/izveduvaci/958.jpg';
        const ELIZABET = 'img/izveduvaci/959.jpg';
        const CUVAJ_SE = 'img/izveduvaci/960.jpg';
        const JUBI_SAN_VASU_KCER = 'img/izveduvaci/961.jpg';
        const PROLJECE_BEZ_TEBE = 'img/izveduvaci/962.jpg';
        const JEDNU_MLADOST_IMAM = 'img/izveduvaci/963.jpg';
        const HARMONIKA = 'img/izveduvaci/964.jpg';
        const JUGOSLOVENKA = 'img/izveduvaci/965.jpg';
        const RUSKA_COKOLADA = 'img/izveduvaci/966.jpg';
        const JEDINO_MOJE = 'img/izveduvaci/967.jpg';
        const DOK_GITARA_SVIRA = 'img/izveduvaci/968.jpg';



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
        const NENO_BELAN = 'img/izveduvaci/637.jpg';
        const MARINA_PERAZIC = 'img/izveduvaci/638.jpg';
        const METAK = 'img/izveduvaci/639.jpg';
        const MIKI_JEVREMOVIC = 'img/izveduvaci/640.jpg';
        const MINEA = 'img/izveduvaci/642.jpg';
        const MIRZINO_JATO = 'img/izveduvaci/643.jpg';
        const INDEXI = 'img/izveduvaci/647.jpg';
        const JADRANKA_STOJAKOVIC = 'img/izveduvaci/648.jpg';
        const JASNA_ZLOKIC = 'img/izveduvaci/651.jpg';
        const OLIVER_MANDIC = 'img/izveduvaci/655.jpg';
        const OSVAJACI = 'img/izveduvaci/658.jpg';
        const PARNI_VALJAK = 'img/izveduvaci/663.jpg';
        const HAUSTOR = 'img/izveduvaci/686.jpg';
        const ITD_BAND = 'img/izveduvaci/692.jpg';
        const JADRANKA_STOJAKOVIC = 'img/izveduvaci/693.jpg';
        const PILOTI = 'img/izveduvaci/697.jpg';
        const PLAVI_ORKESTAR = 'img/izveduvaci/704.jpg';
        const POSLEDNJA_IGRA_LEPTIRA = 'img/izveduvaci/710.jpg';
        const PSIHOMODO_POP = 'img/izveduvaci/712.jpg';
        const PRO_ARTE = 'img/izveduvaci/713.jpg';
        const SLADJANA_MILOSEVIC = 'img/izveduvaci/714.jpg';
        const PRLJAVO_KAZALISTE = 'img/izveduvaci/724.jpg';
        const REGATA = 'img/izveduvaci/741.jpg';
        const RIBLJA_CORBA = 'img/izveduvaci/743.jpg';
        const JOSIPA_LISAC = 'img/izveduvaci/774.jpg';
        const IZOLDA = 'img/izveduvaci/781.jpg';
        const SREBRENA_KRILA = 'img/izveduvaci/783.jpg';
        const SMAK = 'img/izveduvaci/786.jpg';
        const SRDJAN_JUL = 'img/izveduvaci/788.jpg';
        const SREBRENA_KRILA = 'img/izveduvaci/789.jpg';
        const SUNCANA_STRANA_ULICE = 'img/izveduvaci/790.jpg';
        const KALIOPI = 'img/izveduvaci/791.jpg';
        const KEMAL_MONTENO = 'img/izveduvaci/794.jpg';
        const KERBER = 'img/izveduvaci/800.jpg';
        const KICO_SLABINAC = 'img/izveduvaci/805.jpg';
        const LAKI_PINGVINI = 'img/izveduvaci/807.jpg';
        const ZDRAVKO_COLIC = 'img/izveduvaci/809.jpg';
        const TIME = 'img/izveduvaci/823.jpg';
        const FRKA = 'img/izveduvaci/825.jpg';
        const TAJCI = 'img/izveduvaci/827.jpg';
        const TEREZA_KESOVIJA = 'img/izveduvaci/831.jpg';
        const TONY_MONTANO = 'img/izveduvaci/833.jpg';
        const TUTTI_FRUTTI = 'img/izveduvaci/834.jpg';
        const VAJTA = 'img/izveduvaci/836.jpg';
        const VALENTINO = 'img/izveduvaci/838.jpg';
        const VIDEOSEX = 'img/izveduvaci/840.jpg';
        const YU_GRUPA = 'img/izveduvaci/842.jpg';
        const VJESTICE = 'img/izveduvaci/843.jpg';
        const ZANA = 'img/izveduvaci/844.jpg';
        const YU_ROCK_MISIJA = 'img/izveduvaci/850.jpg';
        const ZABRANJENO_PUSENJE = 'img/izveduvaci/851.jpg';
        const SREBRNA_KRILA = 'img/izveduvaci/867.jpg';
        const STIJENE = 'img/izveduvaci/868.jpg';
        const TIFA = 'img/izveduvaci/870.jpg';
        const VIKTORIJA = 'img/izveduvaci/877.jpg';
        const VLADO_KALEMBER = 'img/izveduvaci/882.jpg';
        const XENIA = 'img/izveduvaci/883.jpg';
        const VAN_GOGH = 'img/izveduvaci/855.jpg';
        const U_SKRIPCU = 'img/izveduvaci/893.jpg';
        const ZELJKO_BEBEK = 'img/izveduvaci/925.jpg';
        const ZLATKO_PEJAKOVIC = 'img/izveduvaci/931.jpg';
        const ITD_BAND = 'img/izveduvaci/932.jpg';
        const NEKI_TO_VOLE_VRUCE = 'img/izveduvaci/933.jpg';
        const RIVA = 'img/izveduvaci/940.jpg';
        const ARSEN_DEDIC = 'img/izveduvaci/941.jpg';
        const JAKARTA = 'img/izveduvaci/943.jpg';
        const DRAGAN_STOJNIC = 'img/izveduvaci/949.jpg';
        const BOLERO = 'img/izveduvaci/950.jpg';
        const OSMI_PUTNIK = 'img/izveduvaci/952.jpg';
        const SEVERINA = 'img/izveduvaci/955.jpg';
        const BOBA_STEFANOVIC = 'img/izveduvaci/956.jpg';
        const IBRICA_JUSIC = 'img/izveduvaci/961.jpg';
        const LETECI_ODRED = 'img/izveduvaci/963.jpg';
        const MERLIN = 'img/izveduvaci/964.jpg';
        const PEDJA_D_BOY = 'img/izveduvaci/965.jpg';
        const POSLEDNJA_IGRA_LEPTIRA = 'img/izveduvaci/966.jpg';
        const


        // треба да се стави препознавање на песна и промена во текст на DOM

        var artistRadio = info.artist.replace(/&apos;/g, '\'');
        if (artistRadio == 'FRATELLO') {
            var urlCoverArt = FRATELLO;
        }
        else if (artistRadio == 'STAVI PRAVU STVAR') {
            var urlCoverArt = STAVI_PRAVU_STVAR;
        }
        else if (artistRadio == 'STO SI U KAVU STAVILA'){
            var urlCoverArt = STO_SI_U_KAVU_STAVILA;
        }
        else if (artistRadio == 'OBICNA LJUBAVNA PJESMA'){
            var urlCoverArt = OBICNA_LJUBAVNA_PJESMA;
        }
        else if (artistRadio == 'A STA DA RADIM') {
            var urlCoverArt = A_STA_DA_RADIM;
        }
        else if (artistRadio == 'DIGNI ME VISOKO') {
            var urlCoverArt = DIGNI_ME_VISOKO;
        }
        else if (artistRadio == 'OTKAZAN LET'){
            var urlCoverArt = OTKAZAN_LET;
        }
        else if (artistRadio == 'LJUBAV PREKO ZIVE'){
            var urlCoverArt = LJUBAV_PREKO_ZICE;
        }
        else if (artistRadio == 'MIKI MIKI'){
            var urlCoverArt = MIKI_MIKI;
        }
        else if (artistRadio == 'DAO SAM TI DUSI'){
            var urlCoverArt = DAO_SAM_TI_DUSU;
        }
        else if (artistRadio == 'S TOBOM NASAO SAM SRECU') {
            var urlCoverArt = S_TOBOM_NASAO_SAM_SRECU;
        }
        else if (artistRadio == 'KESTENI'){
            var urlCoverArt = KESTENI;
        }
        else if (artistRadio == 'POSLE 9 GODINA'){
            var urlCoverArt = POSLE_9_GODINA;
        }
        else if (artistRadio == 'SANJA') {
            var urlCoverArt = SANJA;
        }
        else if (artistRadio == 'EJ STA MI RADIS'){
            var urlCoverArt = EJ_STA_MI_RADIS;
        }
        else if (artistRadio == 'NEK TI JUTRO MIRISE NA MENE'){
            var urlCoverArt = NEK_TI_JUTRO_MIRISE_NA_MENE;
        }
        else if (artistRadio == 'DOJDJI U 5 DO 5'){
            var urlCoverArt = DOJDJI_U_5_DO_5;
        }
        else if (artistRadio == 'ZEMLJO MOJA FT ISMETA KRAVAC'){
            var urlCoverArt = ZEMLJO_MOJA_FT_ISMETA_KRAVAC;
        }
        else if (artistRadio == 'ANDJELI NAS ZOVU DA IM SKINEMO KRILA'){
            var urlCoverArt = ANDJELI_NAS_ZOVU_DA_IM_SKINEMO_KRILA;
        }
        else if (artistRadio == 'O MLADOSTI'){
            var urlCoverArt = O_MLADOSTI;
        }
        else if (artistRadio == 'SVE STO ZNAS O MENI'){
            var urlCoverArt = SVE_STO_ZNAS_O_MENI;
        }
        else if (artistRadio == 'DEVOJKA IZ MOGA KRAJA'){
            var urlCoverArt = DEVOJKA_IZ_MOGA_KRAJA;
        }
        else if (artistRadio == 'PROLJECE BEZ TEBE'){
            var urlCoverArt = PROLJECE_BEZ_TEBE;
        }
        else if (artistRadio == 'ZAGRLI ME'){
            var urlCoverArt = ZAGRLI_ME;
        }
        else if (artistRadio == 'DEVOJKA BROJ 8'){
            var urlCoverArt = DEVOJKA_BROJ_8;
        }
        else if (artistRadio == 'PAKLENI VOZACI'){
            var urlCoverArt = PAKLENI_VOZACI;
        }
        else if (artistRadio == 'ZA LJUBAV TREBA IMAT DUSU'){
            var urlCoverArt = ZA_LJUBAV_TREBA_IMAT_DUSU;
        }
        else if (artistRadio == 'VOLJELA ME NIJE NI JEDNA'){
            var urlCoverArt = VOLJELA_ME_NIJE_NI_JEDNA;
        }
        else if (artistRadio == 'USNE VRELE VISNJE'){
            var urlCoverArt = USNE_VRELE_VISNJE;
        }
        else if (artistRadio == 'AKO ZNAS BILO STA'){
            var urlCoverArt = AKO_ZNAS_BILO_STA;
        }
        else if (artistRadio == 'BALKAN'){
            var urlCoverArt = BALKAN;
        }
        else if (artistRadio == 'GRACIJA'){
            var urlCoverArt = GRACIJA;
        }
        else if (artistRadio == 'MARINA'){
            var urlCoverArt = MARINA;
        }
        else if (artistRadio == 'LJEPE ZENE PROLAZE KROZ GRAD'){
            var urlCoverArt = LJEPE_ZENE_PROLAZE_KROZ_GRAD;
        }
        else if (artistRadio == 'NOC BEZ SNA'){
            var urlCoverArt = NOC_BEZ_SNA;
        }
        else if (artistRadio == 'DA TE VIDIM GOLU'){
            var urlCoverArt = DA_TE_VIDIM_GOLU;
        }
        else if (artistRadio == 'SAMO NAM JE LJUBAV POTREBNA'){
            var urlCoverArt = SAMO_NAM_JE_LJUBAV_POTREBNA;
        }
        else if (artistRadio == 'PLAVI SAFIRU'){
            var urlCoverArt = PLAVI_SAFIRU;
        }
        else if (artistRadio == 'OD KADe TEBE VOLIM'){
            var urlCoverArt = OD_KAD_TEBE_VOLIM;
        }
        else if (artistRadio == 'VERUJEM NE VERUJEM'){
            var urlCoverArt = VERUJEM_NE_VERUJEM;
        }
        else if (artistRadio == 'GODINE PROLAZE'){
            var urlCoverArt = GODINE_PROLAZE;
        }
        else if (artistRadio == 'TISINA'){
            var urlCoverArt = TISINA;
        }
        else if (artistRadio == 'RUSKI VOZ'){
            var urlCoverArt = RUSKI_VOZ;
        }
        else if (artistRadio == 'VESELA PESMA'){
            var urlCoverArt = VESELA_PESMA;
        }
        else if (artistRadio == 'ZIVOT JE NEKAD SIV NEKAD ZUT'){
            var urlCoverArt = ZIVOT_JE_NEKAD_SIV_NEKAD_ZUT;
        }
        else if (artistRadio == 'GORE DOLE'){
            var urlCoverArt = GORE_DOLE;
        }
        else if (artistRadio == 'TI SE LJUBIS'){
            var urlCoverArt = TI_SE_LJUBIS;
        }
        else if (artistRadio == 'SA DRUGE STRANE'){
            var urlCoverArt = SA_DRUGE_STRANE;
        }
        else if (artistRadio == 'ZAZMURI'){
            var urlCoverArt = ZAZMURI;
        }
        else if (arguments == 'DO BEOGRADA'){
            var urlCoverArt = DO_BEOGRADA;
        }
        else if (artistRadio == 'VIDI STA SAM TI URADIO OD PESME MAMA'){
            var urlCoverArt = VIDI_STA_SAM_TI_URADIO_OD_PESME_MAMA;
        }
        else if (artistRadio == 'SARENE PILULE') {
            var urlCoverArt = SARENE_PILULE;
        }
        else if (artistRadio == 'VEK'){
            var urlCoverArt = VEK;
        }
        else if (artistRadio == 'TAMARA'){
            var urlCoverArt = TAMARA;
        }
        else if (artistRadio == 'POLJUBI ME'){
            var urlCoverArt = POLJUBI_ME;
        }
        else if (artistRadio == 'LEPA JANJA RIBERAVA KCI'){
            var urlCoverArt = LEPA_JANJA_RIBAREVA_KCI;
        }
        else if (artistRadio == 'ZMAJ OD NOVAJA'){
            var urlCoverArt = ZMAJ_OD_NOCAJA;
        }
        else if (artistRadio == 'MUZIKA NA STRUJU'){
            var urlCoverArt = MUZIKA_NA_STRUJU;
        }
        else if (artistRadio == 'OVO JE BALKAN'){
            var urlCoverArt = OVO_JE_BALKAN;
        }
        else if (artistRadio == 'JOS TE VOLIM'){
            var urlCoverArt = JOS_TE_VOLIM;
        }
        else if (artistRadio == 'NA VRHOVIMA PRSTIJU'){
            var urlCoverArt = NA_VRHOVIMA_PRSTIJU;
        }
        else if (artistRadio == 'KAD HODAS'){
            var urlCoverArt = KAD_HODAS;
        }
        else if (artistRadio == 'MOJI SU DRUGOVI'){
            var urlCoverArt = MOJI_SU_DRUGOVI
        }
        else if (artistRadio == 'GDE SI'){
            var urlCoverArt = GDE_SI;
        }
        else if (artistRadio == 'BAM BAM BAM'){
            var urlCoverArt = BAM_BAM_BAM;
        }
        else if (artistRadio == 'NEKA SVEMIR CUJE NEMIR'){
            var urlCoverArt = NEKA_SVEMIR_CUJE_NEMIR;
        }
        else if (artistRadio == 'JEDINO TO SE ZOVE LJUBAV'){
            var urlCoverArt = JEDINO_TO_SE_ZOVE_LJUBAV;
        }
        else if (artistRadio == 'KRV SRECA SUZI I ZNOJ'){
            var urlCoverArt = KRV_SRECA_SUZE_I_ZNOJ;
        }
        else if (artistRadio == 'RUDI'){
            var urlCoverArt = RUDI;
        }
        else if (artistRadio == 'BRAZIL'){
            var urlCoverArt = BRA_ZIL;
        }
        else if (artistRadio == 'HAJDE DA UZMEMO NEKI DOBAR AUTO'){
            var urlCoverArt = HAJDE_DA_UZMEMO_NEKI_DOBAR_AUTO;
        }
        else if (artistRadio == 'BADEMI I SO FT BAJAGA'){
            var urlCoverArt = BADEMI_I_SO_FT_BAJAGA;
        }
        else if (artistRadio == 'DA PRICAMO O LJUBAVU'){
            var urlCoverArt = DA_PRICAMO_O_LJUBAVI;
        }
        else if (artistRadio == 'IPAK POZELIM NEKO PISMO'){
            var urlCoverArt = IPAK_POZELIM_NEKO_PISMO;
        }
        else if (artistRadio == 'BITANGA I PRINCEZA'){
            var urlCoverArt = BITANGA_I_PRINCEZA;
        }
        else if (artistRadio == 'SVE CE TO MILA MOJA PREKRTITI RUZMARIN'){
            var urlCoverArt = SVE_CE_TO_MILA_MOJA_PREKRITI_RUZMARIN;
        }
        else if (artistRadio == 'NOCAS JE KO LUBENICA'){
            var urlCoverArt = NOCAS_JE_KO_LUBENICA;
        }
        else if (artistRadio == 'PLJUNI I ZAPEVAJ MOJA JUGOSLAVIJO'){
            var urlCoverArt = PLJUNI_I_ZAPEVAJ_MOJA_JUGOSLAVIJO;
        }
        else if (artistRadio == 'A I TI ME IZNEVJERI'){
            var urlCoverArt = A_I_TI_ME_IZNEVJERI;
        }
        else if (artistRadio == 'RUZICA SI BILA'){
            var urlCoverArt = RUZICA_SI_BILA;
        }
        else if (artistRadio == 'HAJDEMO U PLANINE'){
            var urlCoverArt = HAJDEMO_U_PLANINE;
        }
        else if (artistRadio == 'JER KAD OSTARIS'){
            var urlCoverArt = JER_KAD_OSTARIS;
        }
        else if (artistRadio == 'LAZES ZLATO'){
            var urlCoverArt = LAZES_ZLATO;
        }
        else if (artistRadio == 'ZA ESMU'){
            var urlCoverArt = ZA_ESMU;
        }
        else if (artistRadio == 'LIPE CVATU'){
            var urlCoverArt = LIPE_CVATU;
        }
        else if (artistRadio == 'PADAJU ZVEZDE'){
            var urlCoverArt = PADAJU_ZVEZDE;
        }
        else if (artistRadio == 'DA TE BOFDO NEVOLIM'){
            var urlCoverArt = DA_TE_BOGDO_NEVOLIM;
        }
        else if (artistRadio == 'MENI SE NESPAVA'){
            var urlCoverArt = MENI_SE_NESPAVA;
        }
        else if (artistRadio == 'AKO MOZES ZABORAVI'){
            var urlCoverArt = AKO_MOZES_ZABORAVI;
        }
        else if (artistRadio == 'U VREME OTKAZANIH LETOVA'){
            var urlCoverArt = U_VREME_OTKAZANIH_LETOVA;
        }
        else if (artistRadio == 'DOZIVJETI STOTU'){
            var urlCoverArt = DOZIVJETI_STOTU;
        }
        else if (artistRadio == 'ZAZMURI I BROJ DO 100'){
            var urlCoverArt = ZAZMURI_I_BROJ_DO_100;
        }
        else if (artistRadio == 'PRISTAO SAM BICU SVE STO HOCE'){
            var urlCoverArt = PRISTAO_SAM_BICU_SVE_STO_HOCE;
        }
        else if (artistRadio == 'HA HA HA SVI MARS NA PLJES'){
            var urlCoverArt = HA_HA_HA_SVI_MARS_NA_PLJES;
        }
        else if (artistRadio == 'KAD BI BIO BIJELO DUGME'){
            var urlCoverArt = KAD_BI_BIO_BIJELO_DUGME;
        }
        else if (artistRadio == 'SELMA'){
            var urlCoverArt = SELMA;
        }
        else if (artistRadio == 'IMA NEKA TAJNA VEZA'){
            var urlCoverArt = IMA_NEKA_TAJNA_VEZA;
        }
        else if (artistRadio == 'DA SAM PEKAR'){
            var urlCoverArt = DA_SAM_PEKAR;
        }
        else if (artistRadio == 'NE SPAVAJ MALA MOJA MUZIKA DOK SVIRA'){
            var urlCoverArt = NE_SPAVAJ_MALA_MOJA_MUZIKA_DOK_SVIRA;
        }
        else if (artistRadio == 'AKO IMA BOGA'){
            var urlCoverArt = AKO_IMA_BOGA;
        }
        else if (artistRadio == 'NAPILE SE ULICE') {
            var urlCoverArt = NAPILE_SE_ULICE;
        }
        else if (artistRadio == 'STA IMA NOVO'){
            var urlCoverArt = STA_IMA_NOVO;
        }
        else if (artistRadio == 'NAKON SVIH OVIH GODINA'){
            var urlCoverArt = NAKON_SVIH_OVIH_GODINA;
        }
        else if (artistRadio == 'CIRIBIRIBELA'){
            var urlCoverArt = CIRIBIRIBELA;
        }
        else if (artistRadio == 'DJURDJEVDAN'){
            var urlCoverArt = DJURDJEVDAN;
        }
        else if (artistRadio == 'EVO ZAKLECU SE'){
            var urlCoverArt = EVO_ZAKLECU_SE;
        }
        else if (artistRadio == 'IZGLEDALA JE MALO CUDNO U KAPUTU'){
            var urlCoverArt = IZGLEDALA_JE_MALO_CUDNO_U_KAPUTU;
        }
        else if (artistRadio == 'LOSE VINO'){
            var urlCoverArt = LOSE_VINO;
        }
        else if (artistRadio == 'SANJAO SAM NOCAS DA TE NEMAM'){
            var urlCoverArt = SANJAO_SAM_NOCAS_DA_TE_NEMAM;
        }
        else if (artistRadio == 'NA ZADNJEM SEDISTU MOGA AUTA'){
            var urlCoverArt = NA_ZADNJEM_SEDISTU_MOGA_AUTA;
        }
        else if (artistRadio == 'SVI MARS NA PLES'){
            var urlCoverArt = SVI_MARS_NA_PLES;
        }
        else if (artistRadio == 'TAKO TI JE MALA MOJA'){
            var urlCoverArt = TAKO_TI_JE_MALA_MOJA;
        }
        else if (artistRadio == 'DOBRO VAM JUTRO'){
            var urlCoverArt = DOBRO_VAM_JUTRO;
        }
        else if (artistRadio == 'ZLATNI DAN'){
            var urlCoverArt = ZLATNI_DAN;
        }
        else if (artistRadio == 'MILO MOJE'){
            var urlCoverArt = MILO_MOJE;
        }
        else if (artistRadio == 'UZALUD ME PODSECAS'){
            var urlCoverArt = UZALUD_ME_PODSECAS;
        }
        else if (artistRadio == 'STO JE SA PRINCEZOM MOJE VRELE MLADOSTI'){
            var urlCoverArt = STO_JE_SA_PRINCEZOM_MOJE_VRELE_MLADOSTI;
        }
        else if (artistRadio == 'KO SAM BEZ TEBE'){
            var urlCoverArt = KO_SAM_BEZ_TEBE;
        }
        else if (artistRadio == 'EMILY'){
            var urlCoverArt = EMILY;
        }
        else if (artistRadio == 'KUDA IDU IZGUBLJENE DEVOJKE'){
            var urlCoverArt = KUDA_IDU_IZGUBLJENE_DEVOJKE;
        }
        else if (artistRadio == 'PRODALA ME TI'){
            var urlCoverArt = PRODALA_ME_TI;
        }
        else if (artistRadio == 'DOK SVIRA RADIO'){
            var urlCoverArt = DOK_SVIRA_RADIO;
        }
        else if (artistRadio == 'DALEKO FT KEMALMONTENO'){
            var urlCoverArt = DALEKO_FT_KEMALMONTENO;
        }
        else if (artistRadio == 'MI SMO JACI I OD SUDBINE'){
            var urlCoverArt = MI_SMO_JACI_I_OD_SUDBINE;
        }
        else if (artistRadio == 'U DOBRU I ZLU'){
            var urlCoverArt = U_DOBRU_I_ZLU;
        }
        else if (artistRadio == 'ELOIS'){
            var urlCoverArt = ELOIS;
        }
        else if (artistRadio == 'TUGA TI I JA'){
            var urlCoverArt = TUGA_TI_I_JA;
        }
        else if (artistRadio == 'TO MI RADI'){
            var urlCoverArt = TO_MI_RADI;
        }
        else if (artistRadio == 'NEKAKO S PROLJECA FT KEMAL MONTENO'){
            var urlCoverArt = NEKAKO_S_PROLJECA_FT_KEMAL_MONTENO;
        }
        else if (artistRadio == 'MOJE NEJMILIJE'){
            var urlCoverArt = MOJE_NAJMILIJE;
        }
        else if (artistRadio == 'TUGO NESRECO'){
            var urlCoverArt = TUGO_NESRECO;
        }
        else if (artistRadio == 'ZOVU NAS ULICE'){
            var urlCoverArt = ZOVU_NAS_ULICE;
        }
        else if (artistRadio == 'BJEZI KISO S PROZORA'){
            var urlCoverArt = BJEZI_KISO_S_PROZORA;
        }
        else if (artistRadio == 'TAMO GDE LJUBAV POCINJE'){
            var urlCoverArt = TAMO_GDE_LJUBAV_POCINJE;
        }
        else if (artistRadio == 'TVOGA SRCA VRATA'){
            var urlCoverArt = TVOGA_SRCA_VRATA;
        }
        else if (artistRadio == 'DIRLIJA'){
            var urlCoverArt = DIRLIJA;
        }
        else if (artistRadio == 'IMAM NEKE FORE'){
            var urlCoverArt = IMAM_NEKE_FORE;
        }
        else if (artistRadio == 'VOLIO BI DA SI TU'){
            var urlCoverArt = VOLIO_BI_DA_SI_TU;
        }
        else if (artistRadio == 'SAMPANJSKI POLJUBAC'){
            var urlCoverArt = SAMPANJSKI_POLJUBAC;
        }
        else if (artistRadio == 'DA MI JE DO NJE'){
            var urlCoverArt = DA_MI_JE_DO_NJE;
        }
        else if (artistRadio == 'STIZU ME SECANJA'){
            var urlCoverArt = STIZU_ME_SECANJA;
        }
        else if (artistRadio == 'IMA NESTO OD SRCA DO SRCA'){
            var urlCoverArt = IMA_NESTO_OD_SRCA_DO_SRCA;
        }
        else if (artistRadio == 'AKO AKO'){
            var urlCoverArt = AKO_AKO;
        }
        else if (artistRadio == 'SVIDJA MI SE OVA STVAR'){
            var urlCoverArt = SVIDJA_MI_SE_OVA_STVAR;
        }
        else if (artistRadio == 'PRINCIPESSA'){
            var urlCoverArt = PRINCIPESSA;
        }
        else if (artistRadio == 'NEMA VISE VREMENA'){
            var urlCoverArt = NEMA_VISE_VREMENA;
        }
        else if (artistRadio == 'S TVOJIH USANA'){
            var urlCoverArt = S_TVOJIH_USANA;
        }
        else if (artistRadio == 'FLOYD'){
            var urlCoverArt = FLOYD;
        }
        else if (artistRadio == 'JA HOCU ZIVOT'){
            var urlCoverArt = JA_HOCU_ZIVOT;
        }
        else if (artistRadio == 'NOC JE PREKRASNA'){
            var urlCoverArt = NOC_JE_PREKRASNA;
        }
        else if (artistRadio == 'DZULI'){
            var urlCoverArt = DZULI;
        }
        else if (artistRadio == 'NEKA MI NE SVANE'){
            var urlCoverArt = NEKA_MI_NE_SVANE;
        }
        else if (artistRadio == 'DA JE SALDJE ZASPATI'){
            var urlCoverArt = DA_JE_SALDJE_ZASPATI;
        }
        else if (artistRadio == 'ULICA JORGOVANA'){
            var urlCoverArt = ULICA_JORGOVANA;
        }
        else if (artistRadio == 'JA BIH DA PEVAM'){
            var urlCoverArt = JA_BIH_DA_PEVAM;
        }
        else if (artistRadio == 'JULIJA'){
            var urlCoverArt = JULIJA;
        }
        else if (artistRadio == 'LETNJE KISE'){
            var urlCoverArt = LETNJE_KISE;
        }
        else if (artistRadio == 'OAZA SNOVA'){
            var urlCoverArt = OAZA_SNOVA;
        }
        else if (artistRadio == 'SOBA 23'){
            var urlCoverArt = SOBA_23;
        }
        else if (artistRadio == 'PROGRAM TVOG KOMPJUTERA'){
            var urlCoverArt = PROGRAM_TVOG_KOMPJUTERA;
        }
        else if (artistRadio == 'VOLI ME JOS OVU NOC'){
            var urlCoverArt = VOLI_ME_JOS_OVU_NOC;
        }
        else if (artistRadio == 'JA SAM LAZLJIVA'){
            var urlCoverArt = JA_SAM_LAZLJIVA;
        }
        else if (artistRadio == 'U RITMU ME OKRENI'){
            var urlCoverArt = U_RITMU_ME_OKRENI;
        }
        else if (artistRadio == 'TI SI MI U MISLIMA'){
            var urlCoverArt = TI_SI_MI_U_MISLIMA;
        }
        else if (artistRadio == 'TEBI PRIPADAM'){
            var urlCoverArt = TEBI_PRIPADAM;
        }
        else if (artistRadio == 'LJUBAV SE ZOVE IMENOM TVOIM'){
            var urlCoverArt = LJUBAV_SE_ZOVE_IMENOM_TVOIM;
        }
        else if (artistRadio == 'NECU DA ZNAM ZA NIKOG OSIM TEBE'){
            
        }
        else {
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

        if (artist == 'ALKA VUJICA') {
            var urlCoverArt = ALKA;
        }

        else {
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
                    (document.getElementsByClassName('modal-backdrop')[0]) ? document.getElementsByClassName('modal-backdrop')[0].remove() : '';
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
    if (audio) {
        if (audio.volume >= 0 && audio.volume < 1) {
            audio.volume = (vol + .01).toFixed(2);
        }
    }
}

function volumeDown() {
    var vol = audio.volume;
    if (audio) {
        if (audio.volume >= 0.01 && audio.volume <= 1) {
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

            if (this.response.length === 0) {
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

anime.timeline({ loop: true })
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