
	
function DevelopmentbyMonthgraph(chartData){
	
if (chartData == null || chartData.length <= 0)
		return;
	
var datatypetouse_Development_by_Month = $('#datatypedd_DevelopmentbyMonthgraph option:selected').text();


if (datatypetouse_Development_by_Month == "" || datatypetouse_Development_by_Month == "Total dwellings consented") {

	MonthsLength = $.map(chartData, function(data){return data["Citywide Months Longterm Months"];}).length

	data = [{
		x: $.map(chartData, function(data){
			return data["Citywide Months Longterm Months"];
		}),
		y: $.map(chartData, function(data){
			return data["Citywide Months Longterm Total New Dwellings"];
		}),
		type: 'bar',
		marker: {color: Colour1}
        }];

	layout = {
		title: 'Total dwellings consented by month',
		showlegend: false,
		xaxis: {zeroline: false, tickmode: 'auto', tickangle: 45, fixedrange: Zooming, range: [MonthsLength-24.6,MonthsLength]},		
		yaxis: {zeroline: false, fixedrange: Zooming, range: [0,160]},
		}
	;}

else {

	data = [{
		x: $.map(chartData, function(data){
			return data["Citywide Months Longterm Months"];
		}),
		y: $.map(chartData, function(data){
			return data["Citywide Months Longterm New Houses"];
		}),
		name: "Houses",
		type: 'bar',
		marker: {color: Colour1}
		
        },{
		x: $.map(chartData, function(data){
			return data["Citywide Months Longterm Months"];
		}),
		y: $.map(chartData, function(data){
			return data["Citywide Months Longterm New Units"];
		}),
		name: "Units",
		type: 'bar',
		marker: {color: Colour2}
		
        },{
		x: $.map(chartData, function(data){
			return data["Citywide Months Longterm Months"];
		}),
		y: $.map(chartData, function(data){
			return data["Citywide Months Longterm New Apartments"];
		}),
		name: "Apartments",
		type: 'bar',
		marker: {color: Colour3}
		
        },{
		x: $.map(chartData, function(data){
			return data["Citywide Months Longterm Months"];
		}),
		y: $.map(chartData, function(data){
			return data["Citywide Months Longterm Retirement Village Units"];
		}),
		name: "Retirement village units",
		type: 'bar',
		marker: {color: Colour4}
        }];

	MonthsLength = $.map(chartData, function(data){return data["Citywide Months Longterm Months"];}).length 
	
	layout = {
		title: 'Consented dwellings by type and month',
		showlegend: true,
		legend: {orientation: 'h', y: '-0.25'},
		xaxis: {
			zeroline: false, 
			tickmode: 'auto', 
			tickangle: 45, 
			fixedrange: Zooming, 
			range: [MonthsLength-24.6,MonthsLength]
			},
		yaxis: {
			zeroline: false, 
			fixedrange: Zooming, 
			range: [0,160]},
			barmode: 'stack'
			}
	;}


Plotly.newPlot('DevelopmentbyMonth', data, layout);
}
