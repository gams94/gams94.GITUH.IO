ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([14.952184, 12.039601, 15.193656, 12.169939]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Quartier2020WGS84_1 = new ol.format.GeoJSON();
var features_Quartier2020WGS84_1 = format_Quartier2020WGS84_1.readFeatures(json_Quartier2020WGS84_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Quartier2020WGS84_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Quartier2020WGS84_1.addFeatures(features_Quartier2020WGS84_1);
var lyr_Quartier2020WGS84_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Quartier2020WGS84_1, 
                style: style_Quartier2020WGS84_1,
                interactive: true,
    title: 'Quartier 2020WGS84<br />\
    <img src="styles/legend/Quartier2020WGS84_1_0.png" /> ABASSANA<br />\
    <img src="styles/legend/Quartier2020WGS84_1_1.png" /> AM RIGUEBE<br />\
    <img src="styles/legend/Quartier2020WGS84_1_2.png" /> AMSSINENE<br />\
    <img src="styles/legend/Quartier2020WGS84_1_3.png" /> ARDEP DJOUMAL<br />\
    <img src="styles/legend/Quartier2020WGS84_1_4.png" /> ARDEP TIMAN<br />\
    <img src="styles/legend/Quartier2020WGS84_1_5.png" /> BLABLINE<br />\
    <img src="styles/legend/Quartier2020WGS84_1_6.png" /> BOLOLO<br />\
    <img src="styles/legend/Quartier2020WGS84_1_7.png" /> CHAMP DE FIL<br />\
    <img src="styles/legend/Quartier2020WGS84_1_8.png" /> DJABALGATO<br />\
    <img src="styles/legend/Quartier2020WGS84_1_9.png" /> DJAMBAL BAHAR<br />\
    <img src="styles/legend/Quartier2020WGS84_1_10.png" /> DJOJOUGOULIER<br />\
    <img src="styles/legend/Quartier2020WGS84_1_11.png" /> FARCHA<br />\
    <img src="styles/legend/Quartier2020WGS84_1_12.png" /> GARDOLE<br />\
    <img src="styles/legend/Quartier2020WGS84_1_13.png" /> GOUDJI HAMARAL GOZ<br />\
    <img src="styles/legend/Quartier2020WGS84_1_14.png" /> GUILMEY<br />\
    <img src="styles/legend/Quartier2020WGS84_1_15.png" /> JARDIN<br />\
    <img src="styles/legend/Quartier2020WGS84_1_16.png" /> KABALAYE<br />\
    <img src="styles/legend/Quartier2020WGS84_1_17.png" /> KARKANDJERI<br />\
    <img src="styles/legend/Quartier2020WGS84_1_18.png" /> KLEMAT<br />\
    <img src="styles/legend/Quartier2020WGS84_1_19.png" /> MADJORIO<br />\
    <img src="styles/legend/Quartier2020WGS84_1_20.png" /> MARDJAN DAFAK<br />\
    <img src="styles/legend/Quartier2020WGS84_1_21.png" /> MASSILABCOMA<br />\
    <img src="styles/legend/Quartier2020WGS84_1_22.png" /> MILEZI<br />\
    <img src="styles/legend/Quartier2020WGS84_1_23.png" /> NAGA I<br />\
    <img src="styles/legend/Quartier2020WGS84_1_24.png" /> NAGA II<br />\
    <img src="styles/legend/Quartier2020WGS84_1_25.png" /> OUROULAOULA I<br />\
    <img src="styles/legend/Quartier2020WGS84_1_26.png" /> OUROULAOULA II<br />\
    <img src="styles/legend/Quartier2020WGS84_1_27.png" /> REPOS<br />\
    <img src="styles/legend/Quartier2020WGS84_1_28.png" /> RIDINA<br />\
    <img src="styles/legend/Quartier2020WGS84_1_29.png" /> SABANGALI<br />\
    <img src="styles/legend/Quartier2020WGS84_1_30.png" /> ZARAF<br />\
    <img src="styles/legend/Quartier2020WGS84_1_31.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Quartier2020WGS84_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Quartier2020WGS84_1];
lyr_Quartier2020WGS84_1.set('fieldAliases', {'Id': 'code', 'Nom_Arr': 'nom', 'F_AREA': 'F_AREA', 'Sup_Arrond': 'Sup_Arrond', 'SUP': 'SUP', 'wikipedia': 'url', });
lyr_Quartier2020WGS84_1.set('fieldImages', {'Id': 'Range', 'Nom_Arr': 'TextEdit', 'F_AREA': 'Hidden', 'Sup_Arrond': 'Hidden', 'SUP': 'Hidden', 'wikipedia': 'TextEdit', });
lyr_Quartier2020WGS84_1.set('fieldLabels', {'Id': 'inline label', 'Nom_Arr': 'inline label', 'wikipedia': 'inline label', });
lyr_Quartier2020WGS84_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});