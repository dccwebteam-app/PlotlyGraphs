function DwellingsCCCd(chartData){

var ExtraData = $('#DwellingsCCCd_ExtraDataType option:selected').text();
	
if (ExtraData == '-') {
	data = [{
        x: $.map(chartData, function(data){
			return data["Year"]
			;}),
		y: $.map(chartData, function(data){
			return data["CCCd Dwellings"]
			;}),
        name: 'Constructed Dwellings',
		line: {width: 6},
		marker: {color: Colour1}		
        }]
	;}
	
else {
	data = [{
        x: $.map(chartData, function(data){
			return data["Year"]
			;}),
		y: $.map(chartData, function(data){
			return data["CCCd Dwellings"]
			;}),
        name: 'Constructed Dwellings',
		line: {width: 6},
		marker: {color: Colour1}		
        },{
			
        x: $.map(chartData, function(data){
			return data["Year"]
			;}),
		y: $.map(chartData, function(data){
			return data[ExtraData]
			;}),
        name: ExtraData,
		line: {width: 6},
		marker: {color: Colour2}
        }]
	;}

var	RangeVar = [2009,2019];

if (ExtraData == 'Consented Dwellings') {RangeVar = [1991,2019];}
else if (ExtraData == 'Projected Dwellings') {RangeVar = [2009,2048];}


if (ExtraData == 'Projected Dwellings') {
	layout = {
		title: 'Constructed Dwellings',
		showlegend: true,
		legend: {
			orientation: 'h',
			y: '-0.25',
			x: '0.5',
			xanchor: 'center'},
		xaxis: {zeroline: false, tickmode: 'linear', tick0: 0, dtick: 5, tickangle: 45, fixedrange: Zooming, range: RangeVar},
		yaxis: {zeroline: false, fixedrange: Zooming, rangemode: "tozero"}, 
		}
	;}
else {
	layout = {
		title: 'Constructed Dwellings',
		showlegend: true,
		legend: {
			orientation: 'h',
			y: '-0.25',
			x: '0.5',
			xanchor: 'center'},
		xaxis: {zeroline: false, tickmode: 'linear', tick0: 0, dtick: 1, tickangle: 45, fixedrange: Zooming, range: RangeVar},
     		yaxis: {zeroline: false, fixedrange: Zooming, rangemode: "tozero"}, 
		}	
	;}	
		
	Plotly.newPlot('DwellingsCompleted', data, layout);
	
	} 
	

		
