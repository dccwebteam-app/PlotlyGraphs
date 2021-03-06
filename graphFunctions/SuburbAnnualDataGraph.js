function SuburbAnnualDataGraph(chartData){

var suburbtouse = $('#datafromdropdown_suburbgraph option:selected').text();
var comparisonsuburbtouse = $('#comparisiondd_suburbgraph option:selected').text();
var datatypetouse = $('#datatypedd_suburbgraph option:selected').text();

	
if (suburbtouse == "") {
	suburbtouse = "Dunedin City Total"
	;}

	
	
	SuburbYears = $.map(chartData, function(data){
		return data["Year"]
		;});

	housedata = $.map(chartData, function(data){
		return data["Houses".concat(suburbtouse)];
		});
		
	unitdata = $.map(chartData, function(data){
		return data["Units".concat(suburbtouse)];
		});

	apartmentdata = $.map(chartData, function(data){
		return data["Apartments".concat(suburbtouse)];
		});

	retirementunitsdata = $.map(chartData, function(data){
		return data["Retirement Village Units".concat(suburbtouse)];
		});

	totaldwellingsdata = $.map(chartData, function(data){
		return data["TotalDwellings".concat(suburbtouse)];
		});

	constructionvaluedata = $.map(chartData, function(data){ 
		return data["ConstructionValue".concat(suburbtouse)]; 
		}); 
		
	housedata_comparisonsuburb = $.map(chartData, function(data){
		return data["Houses".concat(comparisonsuburbtouse)];
		});
		
	unitdata_comparisonsuburb = $.map(chartData, function(data){
		return data["Units".concat(comparisonsuburbtouse)];
		});

	apartmentdata_comparisonsuburb = $.map(chartData, function(data){
		return data["Apartments".concat(comparisonsuburbtouse)];
		});

	retirementunitsdata_comparisonsuburb = $.map(chartData, function(data){
		return data["Retirement Village Units".concat(comparisonsuburbtouse)];
		});

	totaldwellingsdata_comparisonsuburb = $.map(chartData, function(data){
		return data["TotalDwellings".concat(comparisonsuburbtouse)];
		});

		
	constructionvaluedata_comparisonsuburb = $.map(chartData, function(data){ 
		return data["ConstructionValue".concat(comparisonsuburbtouse)]; 
		}); 
 

 if (comparisonsuburbtouse == "") {
		visibilitytoggle = false
	;}
	
else {
		visibilitytoggle = true
	;}

	

if (datatypetouse == "Consented Dwellings by Type" && comparisonsuburbtouse == " ") {
	data = [{
        x: SuburbYears,
        y: housedata,
        name: 'Houses',
		type: 'bar',
		marker: {color: Colour1}
        
		},{
        x: SuburbYears,
        y: unitdata,
        name: 'Units',
		type: 'bar',
		marker: {color: Colour2}
        
		},{
        x: SuburbYears,
        y: apartmentdata,
        name: 'Apartments',
		type: 'bar',
		marker: {color: Colour4}

		},{
        x: SuburbYears,
        y: retirementunitsdata,
        name: 'Retirement Village Units',
		type: 'bar',
		marker: {color: Colour5}
        }],

	layout = {
		title: 'Consented Dwellings by Type',
		showlegend: true,
		legend: {
			orientation: 'h',
			y: '-0.25',
			x: '0.5',
			xanchor: 'center'},
		xaxis: {
			zeroline: false, 
			tickmode: 'linear', 
			tick0: SuburbYears[0],
			dtick: 2,
			tickangle: 45, 
			automargin: true,
			fixedrange: Zooming},
		yaxis: {
			zeroline: false, 
			rangemode: "tozero", 
			fixedrange: Zooming},
		barmode: 'stack'
		}
	;}

else if (datatypetouse == "Consented Dwellings by Type" && comparisonsuburbtouse != " ") {
	data = [{
        x: SuburbYears,
        y: housedata,
        name: "Houses",
		type: 'bar',
		xaxis: 'x2',
		yaxis: 'y2',
		marker: {color: Colour1}
        
		},{
        x: SuburbYears,
        y: unitdata,
        name: "Units",
		type: 'bar',
		xaxis: 'x2',
		yaxis: 'y2',
		marker: {color: Colour2}
        
		},{
        x: SuburbYears,
        y: apartmentdata,
        name: "Apartments",
		type: 'bar',
		xaxis: 'x2',
		yaxis: 'y2',
		marker: {color: Colour4}
       
		},{
        x: SuburbYears,
        y: retirementunitsdata,
        name: "Retirement Village Units",
		type: 'bar',
		xaxis: 'x2',
		yaxis: 'y2',
		marker: {color: Colour5}
        
		},{    
	    x: SuburbYears,
        y: housedata_comparisonsuburb,
        name: "Houses",
		visible: visibilitytoggle,
        type: 'bar',
		showlegend: false,
		marker: {color: Colour1}
        
		},{    
		x: SuburbYears,
        y: unitdata_comparisonsuburb,
        name: "Units",
		visible: visibilitytoggle,
        type: 'bar',
		showlegend: false,
		marker: {color: Colour2}
        
		},{    
		x: SuburbYears,
        y: apartmentdata_comparisonsuburb,
        name: "Apartments",
		visible: visibilitytoggle,
        type: 'bar',
		showlegend: false,
		marker: {color: Colour4}
       
		},{
        x: SuburbYears,
        y: retirementunitsdata_comparisonsuburb,
        name: "Retirement Village Units",
		visible: visibilitytoggle,
		type: 'bar',
		showlegend: false,
		marker: {color: Colour5}
        }];
		
	temp_sum1 = Math.max.apply(Math, totaldwellingsdata);
	temp_sum2 = Math.max.apply(Math, totaldwellingsdata_comparisonsuburb);
	y_max = Math.max(temp_sum1,temp_sum2);
	
 		
	layout = {
		title: 'Consented Dwellings by Type',
		showlegend: true,
		legend: {
			orientation: 'h',
			y: '-0.25',
			x: '0.5',
			xanchor: 'center'},
		barmode: 'stack',

		xaxis: {
			title: comparisonsuburbtouse,
			zeroline: false, 
			tickmode: 'linear', 
			tick0: SuburbYears[0],
			dtick: 2,
			tickangle: 45, 
			automargin: true,
			fixedrange: Zooming},
		
		xaxis2: {
			title: suburbtouse,
			zeroline: false,
			tickmode: 'linear', 
			tick0: SuburbYears[0],
			dtick: 2,
			tickangle: 45, 
			fixedrange: Zooming,
			automargin: true,
			anchor: 'y2'},

		yaxis: {
			zeroline: false, 
			rangemode: "tozero", 
			range: [0,y_max],
			fixedrange: Zooming,
			domain:[0,0.45]},

		yaxis2: {
			zeroline: false, 
			rangemode: "tozero", 
			range: [0,y_max],
			fixedrange: Zooming,
			domain:[0.55,1]}
		}
	;}

else if (datatypetouse == "Value of Consented Construction") {

	data = [{ 
		x: SuburbYears, 
		y: constructionvaluedata, 
		name: suburbtouse, 
		line: {width: 6}, 
		marker: {color: Colour1} 

	    },{ 
		x: SuburbYears, 
		y: constructionvaluedata_comparisonsuburb, 
		name: comparisonsuburbtouse, 
		visible: visibilitytoggle, 
		line: {width: 6}, 
		marker: {color: Colour2} 
		}], 


	layout = { 
		title: 'Construction Value', 
		showlegend: true, 
		legend: {
			orientation: 'h',
			y: '-0.25',
			x: '0.5',
			xanchor: 'center'},
		xaxis: {
			zeroline: false,
			tickmode: 'linear',
			tick0: SuburbYears[0],
			dtick: 2,
			tickangle: 45,
			automargin: true,
			fixedrange: Zooming
			}, 
		yaxis: {
			zeroline: false,
			tickformat: '$,s',
			hoverformat: '$,.4s',
			rangemode: "tozero",
			fixedrange: Zooming
			} 
		}

	;} 


else {
	data = [{
        x: SuburbYears,
        y: totaldwellingsdata,
        name: suburbtouse,
		line: {width: 6},
		marker: {color: Colour1}
		
        },{
        x: SuburbYears,
        y: totaldwellingsdata_comparisonsuburb,
        name: comparisonsuburbtouse,
		visible: visibilitytoggle,
        line: {width: 6},
		marker: {color: Colour2}
        }],

	layout = {
	        title: 'Total Dwellings Consented',
	        showlegend: true,
		legend: {
			orientation: 'h',
			y: '-0.25',
			x: '0.5',
			xanchor: 'center'},
		xaxis: {
			zeroline: false, 
			tickmode: 'linear', 
			tick0: SuburbYears[0],
			dtick: 2,
			tickangle: 45, 
			automargin: true,
			fixedrange: Zooming
			},
		yaxis: {
			zeroline: false, 
			rangemode: "tozero", 
			fixedrange: Zooming}
			}
	;}

	Plotly.newPlot(SuburbInformation, data, layout)
}
