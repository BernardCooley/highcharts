export const jsonData = [
	{
		title: 'Dashboard 1 Title',
		id: 'Dec 17 YTD',
		description: 'Dashboard 1 desc',
		bootstrapGrid: {
			panels: {
				layout: {
					bodyContainer: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
					header: {
						image: 'col-lg-2 col-md-2 col-sm-2 col-xs-2',
						title: 'col-lg-8 col-md-8 col-sm-8 col-xs-8',
						id: 'col-lg-2 col-md-2 col-sm-2 col-xs-2'
					},
					panel1: {
						container: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
						spendSaving: {
							outer: 'col-lg-3 col-md-3 col-sm-3 col-xs-3',
							inner: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
						},
						spend: {
							outer: 'col-lg-9 col-md-9 col-sm-9 col-xs-9',
							inner: 'col-lg-3 col-md-3 col-sm-3 col-xs-3',
						}
					},
					panel2: {
						container: 'col-lg-6 col-md-6 col-sm-12 col-xs-12',
						compliance: 'col-lg-12 col-md-12 col-sm-12 col-xs-12'
					},
					panel3: {
						container: 'col-lg-6 col-md-6 col-sm-12 col-xs-12',
						hotelSummary: 'col-lg-6 col-md-6 col-sm-6 col-xs-6',
						widget: 'col-lg-8 col-md-8 col-sm-8 col-xs-8',
						periodicDemand: 'col-lg-4 col-md-4 col-sm-4 col-xs-4'
					}

				},
				spending_savings: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
				spend: {
					container: 'col-lg-2 col-md-2 col-sm-2 col-xs-3',
					title: 'col-lg-2 col-md-2 col-sm-2 col-xs-2',
					missedOpportunities: 'col-lg-2 col-md-2 col-sm-2 col-xs-2',
					year1: 'col-lg-2 col-md-2 col-sm-2 col-xs-2',
					year2: 'col-lg-2 col-md-2 col-sm-2 col-xs-2'
				},
				periodicDemand: {
					container: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
					value: 'col-lg-4 col-md-4 col-sm-4 col-xs-4',
					upDown: 'col-lg-8 col-md-8 col-sm-8 col-xs-8'
				},
				managementSummary:{
					container: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
					detailsContainer: 'col-lg-6 col-md-6 col-sm-6 col-xs-6',
					widget: 'col-lg-6 col-md-6 col-sm-6 col-xs-6'
				},
				compliance: {
					container: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
					title: 'col-lg-6 col-md-6 col-sm-6 col-xs-6',
					achieved: 'col-lg-4 col-md-4 col-sm-4 col-xs-4',
					lostSavings: 'col-lg-4 col-md-4 col-sm-4 col-xs-4',
					yoy: 'col-lg-2 col-md-2 col-sm-2 col-xs-2',
					widget: 'col-lg-2 col-md-2 col-sm-2 col-xs-2',
					target: {
						container: 'col-lg-2 col-md-2 col-sm-2 col-xs-2',
						title: 'col-lg-6 col-md-6 col-sm-6 col-xs-6',
						widget: 'col-lg-6 col-md-6 col-sm-6 col-xs-6'
					}
				}
			}
		},
		elements: {
			layout: {
				header: {
					height: '70px',
					title: {
						textAlign: 'center',
					},
					id: {
						textAlign: 'right',
					},
					titleId: {
						height: '100%',
						textSize: '25px',
						lineHeight: '70px',
						color: '#9B9B9B'
					}
				},
				panel1: {
					widget: 'spend',
					height: '400px',
					backgroundColor: '#E3E3E3',
				},
				panel2: {
					widget: 'compliance',
					maxHeight: '100%',
					backgroundColor: '#E3E3E3',
					marginTop: '20px'
				},
				panel3: {
					widget: 'spendSaving',
					maxHeight: '100%',
					backgroundColor: '#E3E3E3',
					marginTop: '20px'
				}
			},
			globalStyles: {
				textFont: 'Lato',
				weight: 'bold'
			},
			spending: {
				title: {
					content: 'Total Travel Spending',
					textSize: '20px',//10
					textColor: '#4A4A4A'
				},
				value: {
					content: '$88.5MM / cy',
					textSize: '43px',//24
					textColor: '#00AEEF'
				},
				details: {
					content: '14% down on PY ( $103,524MM )',
					textSize: '16px',//10
					textColor: '#000000'
				}
			},
			spend: {
				title: {
					content: 'Air Spend',
					textSize: '20px', //10
					textColor: '#4A4A4A',
					width: '45%'
				},
				missedOpportunities: {
					title: {
						content: 'Missed Opportunities',
						textSize: '12px',//6
						textColor: '#00AEEF',
						weight: 'bold'
					},
					value: {
						content: '$47,236',
						textSize: '27px',//12
						textColor: '#00AEEF'
					}
				},
				year1: {
					title: {
						content: '• 2016',
						textSize: '12px',//6
						textColor: '#00AEEF'
					},
					value: {
						content: '$160,424',
						textSize: '27px',//12
						textColor: '#00AEEF'
					}
				},
				year2: {
					title: {
						content: '• 2015',
						textSize: '12px',//6
						textColor: '#275D80'
					},
					value: {
						content: '$178,585',
						textSize: '27px',//12
						textColor: '#275D80'
					}
				}
			},
			periodicDemand: {
				title: {
					content: '4 Days International',
					textSize: '12px',//6
					textColor: '#000000'
				},
				value: {
					content: '$1.26MM',
					textSize: '20px',//10
					textColor: '#1FA4DB'
				},
				upDown: {
					content: '14% down on PY',
					textSize: '12px',//6
					textColor: '#4A4A4A'
				}
			},
			hotelSummary: {
				title: {
					content: 'Domestic Apps',
					textSize: '18px',//8
					textColor: '#58595B'
				},
				nights: {
					title: {
						content: 'Room Nights',
						textSize: '12px',//6
						textColor: '#00AEEF'
					},
					value: {
						content: '37,201',
						textSize: '23px',//10
						textColor: '#00AEEF'
					}
				},
				dailyRate: {
					title: {
						content: 'Average day rate',
						textSize: '12px',//6
						textColor: '#183E4E'
					},
					value: {
						content: '$163',
						textSize: '23px',//10
						textColor: '#183E4E'
					}
				}
			},
			compliance: {
				title: {
					content: 'Domestic Tickets',
					textSize: '18px',//9
					textColor: '#58595B'
				},
				achieved: {
					title: {
						content: 'Achieved',
						textSize: '12px',//6
						textColor: '#00AEEF'
					},
					value: {
						content: '$42,235',
						textSize: '23px',//10
						textColor: '#0097D5'
					}
				},
				lostSavings: {
					title: {
						content: 'Lost Savings',
						textSize: '12px',//6
						textColor: '#00AEEF'
					},
					value: {
						content: '$2,325',
						textSize: '23px',//10
						textColor: '#0097D5'
					}
				},
				yoy: {
					title: {
						content: '3% YOY',
						textSize: '25px',//10
						textColor: '#0097D5'
					},
					upDown: {
						content: 'Up on PY',
						textSize: '12px',//6
						textColor: '#4A4A4A'
					}
				},
				target: {
					title: {
						content: 'Target',
						textSize: '12px',//6
						textColor: '#58595B'
					},
					value: {
						content: '97%',
						textSize: '25px',//12
						textColor: '#0097D5'
					}
				}
			}
		},
		widgets: {
			complianceGraph: {
				chartConfig:{
					credits: false,
					exporting: {
						enabled: false
					},
					chart: {
						width: 100,
						height: 100,
						type: "area"
					},
					title: {
						style: {
							display: "none"
						}
					},
					subtitle: {
						style: {
							display: "none"
						}
					},
					xAxis: {
						categories: ["1750", "1800", "1850", "1900", "1950", "1999", "2050"],
						tickmarkPlacement: "on",
						title: {
						},
						lineWidth: 0,
						minorGridLineWidth: 0,
						lineColor: "transparent",
						labels: {
							enabled: false
						},
						minorTickLength: 0,
						tickLength: 0
					},
					yAxis: {
						title: {
							text:null
						},
						lineWidth: 0,
						minorGridLineWidth: 0,
						gridLineWidth: 0,
						labels: {
							enabled: false
						}
					},
					plotOptions: {
						area: {
							stacking: "percent",
							lineColor: "#ffffff",
							lineWidth: 3,
							marker: {
								lineWidth: 0,
								lineColor: "#ffffff",
								enabled: false
							}
						}
					},
					series: [{
						data: [106, 107, 111, 133, 221, 767, 1766],
						showInLegend: false,
						color:"#0097D5"
					}, {
						data: [502, 635, 809, 947, 1402, 3634, 5268],
						showInLegend: false,
						color: "#00ADDD"
					}]
				}
			},
			hotelSummaryGraph: {
				chartConfig: {
					exporting: {
						enabled: false
					},
					credits: false,
					chart:{
						spacingLeft: 0,
						spacingRight: 0,
						spacingTop: 0,
						spacingBottom: 0,
						width: 160,
						height: 120,
						type: "spline",
						backgroundColor: "#0097D5"
					},
					title: {
						style: {
							display: "none"
						}
					},
					subtitle: {
						style: {
							display: "none"
						}
					},
					xAxis: {
						tickmarkPlacement: "on",
						title: {
						},
						lineWidth: 0,
						minorGridLineWidth: 0,
						lineColor: "transparent",
						labels: {
							enabled: false
						},
						minorTickLength: 0,
						tickLength: 0
					},
					yAxis: {
						title: {
							text: null
						},
						lineWidth: 0,
						minorGridLineWidth: 0,
						gridLineWidth: 0,
						labels: {
							enabled: false
						}
					},
					legend: {
						layout: "vertical",
						align: "right",
						verticalAlign: "middle"
					},   
					plotOptions: {
						spline: {
							lineWidth: 2,
							marker: {
								lineWidth: 0,
								lineColor: "#ffffff",
								enabled: false
							}
						}
					},   
					series: [{
						data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
						showInLegend: false,
						color:"#FFF"
					}, 
					{
						data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
						showInLegend: false,
						color:"#000"
					}]
				}
			},
			periodicDemandGraph: {
				chartConfig:{
					credits: false,
					exporting: {
						enabled: false
					},
					chart: {
						spacingLeft: 0,
						spacingRight: 0,
						spacingTop: 0,
						spacingBottom: 0,
						width: 130,
						height: 50,
						type: "area"
					},
					title: {
						style: {
							display: "none"
						}
					},
					subtitle: {
						style: {
							display: "none"
						}
					},
					xAxis: {
						categories: ["1750", "1800", "1850", "1900", "1950", "1999", "2050"],
						tickmarkPlacement: "on",
						title: {
						},
						lineWidth: 0,
						minorGridLineWidth: 0,
						lineColor: "transparent",
						labels: {
							enabled: false
						},
						minorTickLength: 0,
						tickLength: 0
					},
					yAxis: {
						title: {
							text:null
						},
						lineWidth: 0,
						minorGridLineWidth: 0,
						gridLineWidth: 0,
						labels: {
							enabled: false
						}
					},
					plotOptions: {
						area: {
							stacking: "percent",
							lineColor: "#ffffff",
							lineWidth: 3,
							marker: {
								lineWidth: 0,
								lineColor: "#ffffff",
								enabled: false
							}
						}
					},
					series: [{
						data: [106, 107, 111, 133, 221, 767, 1766],
						showInLegend: false,
						color:"#0097D5"
					}, {
						data: [502, 635, 809, 947, 1402, 3634, 5268],
						showInLegend: false,
						color: "#00ADDD"
					}]
				}
			},
			targetGauge: {
				chartConfig : {
					credits: false,
					exporting: {
						enabled: false
					},
					chart: {
						spacingLeft: 0,
						spacingRight: 0,
						spacingTop: 0,
						spacingBottom: 0,
						width: 50,
						height: 50,
						type: 'solidgauge'
					},
					title: {
						style: {
							display: 'none'
						}
					},
					pane: {
						startAngle: 0,
						endAngle: 360,
						background: [
						{ // Track for Move
							outerRadius: '112%',
							innerRadius: '88%',
							backgroundColor: '#e0e0e0',
							borderWidth: 0
						}
						]
					},
					yAxis: {
						min: 0,
						max: 100,
						lineWidth: 0,
						tickPositions: []
					},
					plotOptions: {
						solidgauge: {
							dataLabels: {
								enabled: false
							},
							linecap: 'round',
							stickyTracking: false,
							rounded: true
						}
					},
					series: [
					{
						name: 'Move',
						data: [{
							color: '#275D80',
							radius: '112%',
							innerRadius: '88%',
							y: 80
						}]
					}]
				}
			},
			spendGauge: {
				chartConfig : {
					credits: false,
					exporting: {
						enabled: false
					},
					chart: {
						spacingLeft: 0,
						spacingRight: 0,
						spacingTop: 0,
						spacingBottom: 0,
						width: 260,
						height: 260,
						type: 'solidgauge',
						marginTop: 30
					},
					title: {
						text: 'Savings<br>$25.2',
						style: {
							fontSize: '20px',
							color: '#00AEEF',
							fontWeight: 'bold'
						},
						align: 'center',
						verticalAlign: 'middle'
					},
					pane: {
						startAngle: 0,
						endAngle: 360,
						background: [
						{ // Track for Move
							outerRadius: '112%',
							innerRadius: '88%',
							backgroundColor: '#e0e0e0',
							borderWidth: 0
						}, 
						{ // Track for Exercise
							outerRadius: '87%',
							innerRadius: '63%',
							backgroundColor: '#e0e0e0',
							borderWidth: 0
						}
						]
					},
					yAxis: {
						min: 0,
						max: 100,
						lineWidth: 0,
						tickPositions: []
					},
					plotOptions: {
						solidgauge: {
							dataLabels: {
								enabled: false
							},
							linecap: 'round',
							stickyTracking: false,
							rounded: true
						}
					},
					series: [
					{
						name: '2015',
						data: [{
							color: '#275D80',
							radius: '112%',
							innerRadius: '88%',
							y: 80
						}]
					}, 
					{
						name: '2016',
						data: [{
							color: '#00AEEF',
							radius: '87%',
							innerRadius: '63%',
							y: 65
						}]
					}]
				}
			},
			purposeOfTripGauge: {
				chartConfig: {
					credits: false,
					exporting: {
						enabled: false
					},
					chart: {
						width: 500,
						height: 300,
						plotBackgroundColor: null,
						plotBorderWidth: null,
						plotShadow: false,
						type: 'pie'
					},
					title: {
						text: 'Demand Management Summary',
						style: {
							float: 'left'
						}
					},
					tooltip: {
						pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
					},
					plotOptions: {
						pie: {
							allowPointSelect: true,
							cursor: 'pointer',
							dataLabels: {
								enabled: false
							},
							showInLegend: true
						}
					},
					legend: {
						layout: 'vertical',
						align: 'right',
						verticalAlign: 'middle'
					},
					series: [{
						name: 'Brands',
						colorByPoint: true,
						data: [{
							name: 'External Supplier',
							y: 56.33
						}, {
							name: 'Internal Abbott',
							y: 24.03,
							sliced: true,
							selected: true
						}, {
							name: 'Conference',
							y: 10.38
						}, {
							name: 'External Customer',
							y: 4.77
						}, {
							name: 'External Customer',
							y: 0.91
						}, {
							name: 'Training',
							y: 0.2
						}]
					}]
				}
			}
		}
	},
	{
		title: 'Dashboard 2 Title',
		id: 'Dec 16 YTD',
		description: 'Dashboard 2 desc',
		bootstrapGrid: {
			panels: {
				layout: {
					bodyContainer: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
					header: {
						image: 'col-lg-2 col-md-2 col-sm-2 col-xs-2',
						title: 'col-lg-8 col-md-8 col-sm-8 col-xs-8',
						id: 'col-lg-2 col-md-2 col-sm-2 col-xs-2'
					},
					panel1: {
						container: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
						spendSaving: {
							outer: 'col-lg-3 col-md-3 col-sm-3 col-xs-3',
							inner: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
						},
						spend: {
							outer: 'col-lg-9 col-md-9 col-sm-9 col-xs-9',
							inner: 'col-lg-3 col-md-3 col-sm-3 col-xs-3',
						}
					},
					panel2: {
						container: 'col-lg-6 col-md-6 col-sm-12 col-xs-12',
						compliance: 'col-lg-12 col-md-12 col-sm-12 col-xs-12'
					},
					panel3: {
						container: 'col-lg-6 col-md-6 col-sm-12 col-xs-12',
						hotelSummary: 'col-lg-6 col-md-6 col-sm-6 col-xs-6',
						widget: 'col-lg-8 col-md-8 col-sm-8 col-xs-8',
						periodicDemand: 'col-lg-4 col-md-4 col-sm-4 col-xs-4'
					}

				},
				spending_savings: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
				spend: {
					container: 'col-lg-2 col-md-2 col-sm-2 col-xs-3',
					title: 'col-lg-2 col-md-2 col-sm-2 col-xs-2',
					missedOpportunities: 'col-lg-2 col-md-2 col-sm-2 col-xs-2',
					year1: 'col-lg-2 col-md-2 col-sm-2 col-xs-2',
					year2: 'col-lg-2 col-md-2 col-sm-2 col-xs-2'
				},
				periodicDemand: {
					container: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
					value: 'col-lg-4 col-md-4 col-sm-4 col-xs-4',
					upDown: 'col-lg-8 col-md-8 col-sm-8 col-xs-8'
				},
				managementSummary:{
					container: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
					detailsContainer: 'col-lg-6 col-md-6 col-sm-6 col-xs-6',
					widget: 'col-lg-6 col-md-6 col-sm-6 col-xs-6'
				},
				compliance: {
					container: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
					title: 'col-lg-6 col-md-6 col-sm-6 col-xs-6',
					achieved: 'col-lg-4 col-md-4 col-sm-4 col-xs-4',
					lostSavings: 'col-lg-4 col-md-4 col-sm-4 col-xs-4',
					yoy: 'col-lg-2 col-md-2 col-sm-2 col-xs-2',
					widget: 'col-lg-2 col-md-2 col-sm-2 col-xs-2',
					target: {
						container: 'col-lg-2 col-md-2 col-sm-2 col-xs-2',
						title: 'col-lg-6 col-md-6 col-sm-6 col-xs-6',
						widget: 'col-lg-6 col-md-6 col-sm-6 col-xs-6'
					}
				}
			}
		},
		elements: {
			layout: {
				header: {
					height: '70px',
					title: {
						textAlign: 'center',
					},
					id: {
						textAlign: 'right',
					},
					titleId: {
						height: '100%',
						textSize: '25px',
						lineHeight: '70px',
						color: '#9B9B9B'
					}
				},
				panel1: {
					widget: 'spend',
					height: '400px',
					backgroundColor: '#E3E3E3',
				},
				panel2: {
					widget: 'compliance',
					maxHeight: '100%',
					backgroundColor: '#E3E3E3',
					marginTop: '20px'
				},
				panel3: {
					widget: 'spendSaving',
					maxHeight: '100%',
					backgroundColor: '#E3E3E3',
					marginTop: '20px'
				}
			},
			globalStyles: {
				textFont: 'Lato',
				weight: 'bold'
			},
			spending: {
				title: {
					content: 'Total Travel Spending',
					textSize: '20px',//10
					textColor: '#4A4A4A'
				},
				value: {
					content: '$88.5MM / cy',
					textSize: '43px',//24
					textColor: '#00AEEF'
				},
				details: {
					content: '14% down on PY ( $103,524MM )',
					textSize: '16px',//10
					textColor: '#000000'
				}
			},
			spend: {
				title: {
					content: 'Air Spend',
					textSize: '20px', //10
					textColor: '#4A4A4A',
					width: '45%'
				},
				missedOpportunities: {
					title: {
						content: 'Missed Opportunities',
						textSize: '12px',//6
						textColor: '#00AEEF',
						weight: 'bold'
					},
					value: {
						content: '$47,236',
						textSize: '27px',//12
						textColor: '#00AEEF'
					}
				},
				year1: {
					title: {
						content: '• 2016',
						textSize: '12px',//6
						textColor: '#00AEEF'
					},
					value: {
						content: '$160,424',
						textSize: '27px',//12
						textColor: '#00AEEF'
					}
				},
				year2: {
					title: {
						content: '• 2015',
						textSize: '12px',//6
						textColor: '#275D80'
					},
					value: {
						content: '$178,585',
						textSize: '27px',//12
						textColor: '#275D80'
					}
				}
			},
			periodicDemand: {
				title: {
					content: '4 Days International',
					textSize: '12px',//6
					textColor: '#000000'
				},
				value: {
					content: '$1.26MM',
					textSize: '20px',//10
					textColor: '#1FA4DB'
				},
				upDown: {
					content: '14% down on PY',
					textSize: '12px',//6
					textColor: '#4A4A4A'
				}
			},
			hotelSummary: {
				title: {
					content: 'Domestic Apps',
					textSize: '18px',//8
					textColor: '#58595B'
				},
				nights: {
					title: {
						content: 'Room Nights',
						textSize: '12px',//6
						textColor: '#00AEEF'
					},
					value: {
						content: '37,201',
						textSize: '23px',//10
						textColor: '#00AEEF'
					}
				},
				dailyRate: {
					title: {
						content: 'Average day rate',
						textSize: '12px',//6
						textColor: '#183E4E'
					},
					value: {
						content: '$163',
						textSize: '23px',//10
						textColor: '#183E4E'
					}
				}
			},
			compliance: {
				title: {
					content: 'Domestic Tickets',
					textSize: '18px',//9
					textColor: '#58595B'
				},
				achieved: {
					title: {
						content: 'Achieved',
						textSize: '12px',//6
						textColor: '#00AEEF'
					},
					value: {
						content: '$42,235',
						textSize: '23px',//10
						textColor: '#0097D5'
					}
				},
				lostSavings: {
					title: {
						content: 'Lost Savings',
						textSize: '12px',//6
						textColor: '#00AEEF'
					},
					value: {
						content: '$2,325',
						textSize: '23px',//10
						textColor: '#0097D5'
					}
				},
				yoy: {
					title: {
						content: '3% YOY',
						textSize: '25px',//10
						textColor: '#0097D5'
					},
					upDown: {
						content: 'Up on PY',
						textSize: '12px',//6
						textColor: '#4A4A4A'
					}
				},
				target: {
					title: {
						content: 'Target',
						textSize: '12px',//6
						textColor: '#58595B'
					},
					value: {
						content: '97%',
						textSize: '25px',//12
						textColor: '#0097D5'
					}
				}
			}
		},
		widgets: {
			complianceGraph: {
				chartConfig:{
					credits: false,
					exporting: {
						enabled: false
					},
					chart: {
						width: 100,
						height: 100,
						type: "area"
					},
					title: {
						style: {
							display: "none"
						}
					},
					subtitle: {
						style: {
							display: "none"
						}
					},
					xAxis: {
						categories: ["1750", "1800", "1850", "1900", "1950", "1999", "2050"],
						tickmarkPlacement: "on",
						title: {
						},
						lineWidth: 0,
						minorGridLineWidth: 0,
						lineColor: "transparent",
						labels: {
							enabled: false
						},
						minorTickLength: 0,
						tickLength: 0
					},
					yAxis: {
						title: {
							text:null
						},
						lineWidth: 0,
						minorGridLineWidth: 0,
						gridLineWidth: 0,
						labels: {
							enabled: false
						}
					},
					plotOptions: {
						area: {
							stacking: "percent",
							lineColor: "#ffffff",
							lineWidth: 3,
							marker: {
								lineWidth: 0,
								lineColor: "#ffffff",
								enabled: false
							}
						}
					},
					series: [{
						data: [106, 107, 111, 133, 221, 767, 1766],
						showInLegend: false,
						color:"#0097D5"
					}, {
						data: [502, 635, 809, 947, 1402, 3634, 5268],
						showInLegend: false,
						color: "#00ADDD"
					}]
				}
			},
			hotelSummaryGraph: {
				chartConfig: {
					exporting: {
						enabled: false
					},
					credits: false,
					chart:{
						spacingLeft: 0,
						spacingRight: 0,
						spacingTop: 0,
						spacingBottom: 0,
						width: 160,
						height: 120,
						type: "spline",
						backgroundColor: "#0097D5"
					},
					title: {
						style: {
							display: "none"
						}
					},
					subtitle: {
						style: {
							display: "none"
						}
					},
					xAxis: {
						tickmarkPlacement: "on",
						title: {
						},
						lineWidth: 0,
						minorGridLineWidth: 0,
						lineColor: "transparent",
						labels: {
							enabled: false
						},
						minorTickLength: 0,
						tickLength: 0
					},
					yAxis: {
						title: {
							text: null
						},
						lineWidth: 0,
						minorGridLineWidth: 0,
						gridLineWidth: 0,
						labels: {
							enabled: false
						}
					},
					legend: {
						layout: "vertical",
						align: "right",
						verticalAlign: "middle"
					},   
					plotOptions: {
						spline: {
							lineWidth: 2,
							marker: {
								lineWidth: 0,
								lineColor: "#ffffff",
								enabled: false
							}
						}
					},   
					series: [{
						data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
						showInLegend: false,
						color:"#FFF"
					}, 
					{
						data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
						showInLegend: false,
						color:"#000"
					}]
				}
			},
			periodicDemandGraph: {
				chartConfig:{
					credits: false,
					exporting: {
						enabled: false
					},
					chart: {
						spacingLeft: 0,
						spacingRight: 0,
						spacingTop: 0,
						spacingBottom: 0,
						width: 130,
						height: 50,
						type: "area"
					},
					title: {
						style: {
							display: "none"
						}
					},
					subtitle: {
						style: {
							display: "none"
						}
					},
					xAxis: {
						categories: ["1750", "1800", "1850", "1900", "1950", "1999", "2050"],
						tickmarkPlacement: "on",
						title: {
						},
						lineWidth: 0,
						minorGridLineWidth: 0,
						lineColor: "transparent",
						labels: {
							enabled: false
						},
						minorTickLength: 0,
						tickLength: 0
					},
					yAxis: {
						title: {
							text:null
						},
						lineWidth: 0,
						minorGridLineWidth: 0,
						gridLineWidth: 0,
						labels: {
							enabled: false
						}
					},
					plotOptions: {
						area: {
							stacking: "percent",
							lineColor: "#ffffff",
							lineWidth: 3,
							marker: {
								lineWidth: 0,
								lineColor: "#ffffff",
								enabled: false
							}
						}
					},
					series: [{
						data: [106, 107, 111, 133, 221, 767, 1766],
						showInLegend: false,
						color:"#0097D5"
					}, {
						data: [502, 635, 809, 947, 1402, 3634, 5268],
						showInLegend: false,
						color: "#00ADDD"
					}]
				}
			},
			targetGauge: {
				chartConfig : {
					credits: false,
					exporting: {
						enabled: false
					},
					chart: {
						spacingLeft: 0,
						spacingRight: 0,
						spacingTop: 0,
						spacingBottom: 0,
						width: 50,
						height: 50,
						type: 'solidgauge'
					},
					title: {
						style: {
							display: 'none'
						}
					},
					pane: {
						startAngle: 0,
						endAngle: 360,
						background: [
						{ // Track for Move
							outerRadius: '112%',
							innerRadius: '88%',
							backgroundColor: '#e0e0e0',
							borderWidth: 0
						}
						]
					},
					yAxis: {
						min: 0,
						max: 100,
						lineWidth: 0,
						tickPositions: []
					},
					plotOptions: {
						solidgauge: {
							dataLabels: {
								enabled: false
							},
							linecap: 'round',
							stickyTracking: false,
							rounded: true
						}
					},
					series: [
					{
						name: 'Move',
						data: [{
							color: '#275D80',
							radius: '112%',
							innerRadius: '88%',
							y: 80
						}]
					}]
				}
			},
			spendGauge: {
				chartConfig : {
					credits: false,
					exporting: {
						enabled: false
					},
					chart: {
						spacingLeft: 0,
						spacingRight: 0,
						spacingTop: 0,
						spacingBottom: 0,
						width: 260,
						height: 260,
						type: 'solidgauge',
						marginTop: 30
					},
					title: {
						text: 'Savings<br>$25.2',
						style: {
							fontSize: '20px',
							color: '#00AEEF',
							fontWeight: 'bold'
						},
						align: 'center',
						verticalAlign: 'middle'
					},
					pane: {
						startAngle: 0,
						endAngle: 360,
						background: [
						{ // Track for Move
							outerRadius: '112%',
							innerRadius: '88%',
							backgroundColor: '#e0e0e0',
							borderWidth: 0
						}, 
						{ // Track for Exercise
							outerRadius: '87%',
							innerRadius: '63%',
							backgroundColor: '#e0e0e0',
							borderWidth: 0
						}
						]
					},
					yAxis: {
						min: 0,
						max: 100,
						lineWidth: 0,
						tickPositions: []
					},
					plotOptions: {
						solidgauge: {
							dataLabels: {
								enabled: false
							},
							linecap: 'round',
							stickyTracking: false,
							rounded: true
						}
					},
					series: [
					{
						name: '2015',
						data: [{
							color: '#275D80',
							radius: '112%',
							innerRadius: '88%',
							y: 80
						}]
					}, 
					{
						name: '2016',
						data: [{
							color: '#00AEEF',
							radius: '87%',
							innerRadius: '63%',
							y: 65
						}]
					}]
				}
			},
			purposeOfTripGauge: {
				chartConfig: {
					credits: false,
					exporting: {
						enabled: false
					},
					chart: {
						width: 500,
						height: 300,
						plotBackgroundColor: null,
						plotBorderWidth: null,
						plotShadow: false,
						type: 'pie'
					},
					title: {
						text: 'Demand Management Summary',
						style: {
							float: 'left'
						}
					},
					tooltip: {
						pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
					},
					plotOptions: {
						pie: {
							allowPointSelect: true,
							cursor: 'pointer',
							dataLabels: {
								enabled: false
							},
							showInLegend: true
						}
					},
					legend: {
						layout: 'vertical',
						align: 'right',
						verticalAlign: 'middle'
					},
					series: [{
						name: 'Brands',
						colorByPoint: true,
						data: [{
							name: 'External Supplier',
							y: 56.33
						}, {
							name: 'Internal Abbott',
							y: 24.03,
							sliced: true,
							selected: true
						}, {
							name: 'Conference',
							y: 10.38
						}, {
							name: 'External Customer',
							y: 4.77
						}, {
							name: 'External Customer',
							y: 0.91
						}, {
							name: 'Training',
							y: 0.2
						}]
					}]
				}
			}
		}
	},
	{
		title: 'Dashboard 3 Title',
		id: 'Dec 15 YTD',
		description: 'Dashboard 3 desc',
		bootstrapGrid: {
			panels: {
				layout: {
					bodyContainer: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
					header: {
						image: 'col-lg-2 col-md-2 col-sm-2 col-xs-2',
						title: 'col-lg-8 col-md-8 col-sm-8 col-xs-8',
						id: 'col-lg-2 col-md-2 col-sm-2 col-xs-2'
					},
					panel1: {
						container: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
						spendSaving: {
							outer: 'col-lg-3 col-md-3 col-sm-3 col-xs-3',
							inner: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
						},
						spend: {
							outer: 'col-lg-9 col-md-9 col-sm-9 col-xs-9',
							inner: 'col-lg-3 col-md-3 col-sm-3 col-xs-3',
						}
					},
					panel2: {
						container: 'col-lg-6 col-md-6 col-sm-12 col-xs-12',
						compliance: 'col-lg-12 col-md-12 col-sm-12 col-xs-12'
					},
					panel3: {
						container: 'col-lg-6 col-md-6 col-sm-12 col-xs-12',
						hotelSummary: 'col-lg-6 col-md-6 col-sm-6 col-xs-6',
						widget: 'col-lg-8 col-md-8 col-sm-8 col-xs-8',
						periodicDemand: 'col-lg-4 col-md-4 col-sm-4 col-xs-4'
					}

				},
				spending_savings: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
				spend: {
					container: 'col-lg-2 col-md-2 col-sm-2 col-xs-3',
					title: 'col-lg-2 col-md-2 col-sm-2 col-xs-2',
					missedOpportunities: 'col-lg-2 col-md-2 col-sm-2 col-xs-2',
					year1: 'col-lg-2 col-md-2 col-sm-2 col-xs-2',
					year2: 'col-lg-2 col-md-2 col-sm-2 col-xs-2'
				},
				periodicDemand: {
					container: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
					value: 'col-lg-4 col-md-4 col-sm-4 col-xs-4',
					upDown: 'col-lg-8 col-md-8 col-sm-8 col-xs-8'
				},
				managementSummary:{
					container: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
					detailsContainer: 'col-lg-6 col-md-6 col-sm-6 col-xs-6',
					widget: 'col-lg-6 col-md-6 col-sm-6 col-xs-6'
				},
				compliance: {
					container: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
					title: 'col-lg-6 col-md-6 col-sm-6 col-xs-6',
					achieved: 'col-lg-4 col-md-4 col-sm-4 col-xs-4',
					lostSavings: 'col-lg-4 col-md-4 col-sm-4 col-xs-4',
					yoy: 'col-lg-2 col-md-2 col-sm-2 col-xs-2',
					widget: 'col-lg-2 col-md-2 col-sm-2 col-xs-2',
					target: {
						container: 'col-lg-2 col-md-2 col-sm-2 col-xs-2',
						title: 'col-lg-6 col-md-6 col-sm-6 col-xs-6',
						widget: 'col-lg-6 col-md-6 col-sm-6 col-xs-6'
					}
				}
			}
		},
		elements: {
			layout: {
				header: {
					height: '70px',
					title: {
						textAlign: 'center',
					},
					id: {
						textAlign: 'right',
					},
					titleId: {
						height: '100%',
						textSize: '25px',
						lineHeight: '70px',
						color: '#9B9B9B'
					}
				},
				panel1: {
					widget: 'spend',
					height: '400px',
					backgroundColor: '#E3E3E3',
				},
				panel2: {
					widget: 'compliance',
					maxHeight: '100%',
					backgroundColor: '#E3E3E3',
					marginTop: '20px'
				},
				panel3: {
					widget: 'spendSaving',
					maxHeight: '100%',
					backgroundColor: '#E3E3E3',
					marginTop: '20px'
				}
			},
			globalStyles: {
				textFont: 'Lato',
				weight: 'bold'
			},
			spending: {
				title: {
					content: 'Total Travel Spending',
					textSize: '20px',//10
					textColor: '#4A4A4A'
				},
				value: {
					content: '$88.5MM / cy',
					textSize: '43px',//24
					textColor: '#00AEEF'
				},
				details: {
					content: '14% down on PY ( $103,524MM )',
					textSize: '16px',//10
					textColor: '#000000'
				}
			},
			spend: {
				title: {
					content: 'Air Spend',
					textSize: '20px', //10
					textColor: '#4A4A4A',
					width: '45%'
				},
				missedOpportunities: {
					title: {
						content: 'Missed Opportunities',
						textSize: '12px',//6
						textColor: '#00AEEF',
						weight: 'bold'
					},
					value: {
						content: '$47,236',
						textSize: '27px',//12
						textColor: '#00AEEF'
					}
				},
				year1: {
					title: {
						content: '• 2016',
						textSize: '12px',//6
						textColor: '#00AEEF'
					},
					value: {
						content: '$160,424',
						textSize: '27px',//12
						textColor: '#00AEEF'
					}
				},
				year2: {
					title: {
						content: '• 2015',
						textSize: '12px',//6
						textColor: '#275D80'
					},
					value: {
						content: '$178,585',
						textSize: '27px',//12
						textColor: '#275D80'
					}
				}
			},
			periodicDemand: {
				title: {
					content: '4 Days International',
					textSize: '12px',//6
					textColor: '#000000'
				},
				value: {
					content: '$1.26MM',
					textSize: '20px',//10
					textColor: '#1FA4DB'
				},
				upDown: {
					content: '14% down on PY',
					textSize: '12px',//6
					textColor: '#4A4A4A'
				}
			},
			hotelSummary: {
				title: {
					content: 'Domestic Apps',
					textSize: '18px',//8
					textColor: '#58595B'
				},
				nights: {
					title: {
						content: 'Room Nights',
						textSize: '12px',//6
						textColor: '#00AEEF'
					},
					value: {
						content: '37,201',
						textSize: '23px',//10
						textColor: '#00AEEF'
					}
				},
				dailyRate: {
					title: {
						content: 'Average day rate',
						textSize: '12px',//6
						textColor: '#183E4E'
					},
					value: {
						content: '$163',
						textSize: '23px',//10
						textColor: '#183E4E'
					}
				}
			},
			compliance: {
				title: {
					content: 'Domestic Tickets',
					textSize: '18px',//9
					textColor: '#58595B'
				},
				achieved: {
					title: {
						content: 'Achieved',
						textSize: '12px',//6
						textColor: '#00AEEF'
					},
					value: {
						content: '$42,235',
						textSize: '23px',//10
						textColor: '#0097D5'
					}
				},
				lostSavings: {
					title: {
						content: 'Lost Savings',
						textSize: '12px',//6
						textColor: '#00AEEF'
					},
					value: {
						content: '$2,325',
						textSize: '23px',//10
						textColor: '#0097D5'
					}
				},
				yoy: {
					title: {
						content: '3% YOY',
						textSize: '25px',//10
						textColor: '#0097D5'
					},
					upDown: {
						content: 'Up on PY',
						textSize: '12px',//6
						textColor: '#4A4A4A'
					}
				},
				target: {
					title: {
						content: 'Target',
						textSize: '12px',//6
						textColor: '#58595B'
					},
					value: {
						content: '97%',
						textSize: '25px',//12
						textColor: '#0097D5'
					}
				}
			}
		},
		widgets: {
			complianceGraph: {
				chartConfig:{
					credits: false,
					exporting: {
						enabled: false
					},
					chart: {
						width: 100,
						height: 100,
						type: "area"
					},
					title: {
						style: {
							display: "none"
						}
					},
					subtitle: {
						style: {
							display: "none"
						}
					},
					xAxis: {
						categories: ["1750", "1800", "1850", "1900", "1950", "1999", "2050"],
						tickmarkPlacement: "on",
						title: {
						},
						lineWidth: 0,
						minorGridLineWidth: 0,
						lineColor: "transparent",
						labels: {
							enabled: false
						},
						minorTickLength: 0,
						tickLength: 0
					},
					yAxis: {
						title: {
							text:null
						},
						lineWidth: 0,
						minorGridLineWidth: 0,
						gridLineWidth: 0,
						labels: {
							enabled: false
						}
					},
					plotOptions: {
						area: {
							stacking: "percent",
							lineColor: "#ffffff",
							lineWidth: 3,
							marker: {
								lineWidth: 0,
								lineColor: "#ffffff",
								enabled: false
							}
						}
					},
					series: [{
						data: [106, 107, 111, 133, 221, 767, 1766],
						showInLegend: false,
						color:"#0097D5"
					}, {
						data: [502, 635, 809, 947, 1402, 3634, 5268],
						showInLegend: false,
						color: "#00ADDD"
					}]
				}
			},
			hotelSummaryGraph: {
				chartConfig: {
					exporting: {
						enabled: false
					},
					credits: false,
					chart:{
						spacingLeft: 0,
						spacingRight: 0,
						spacingTop: 0,
						spacingBottom: 0,
						width: 160,
						height: 120,
						type: "spline",
						backgroundColor: "#0097D5"
					},
					title: {
						style: {
							display: "none"
						}
					},
					subtitle: {
						style: {
							display: "none"
						}
					},
					xAxis: {
						tickmarkPlacement: "on",
						title: {
						},
						lineWidth: 0,
						minorGridLineWidth: 0,
						lineColor: "transparent",
						labels: {
							enabled: false
						},
						minorTickLength: 0,
						tickLength: 0
					},
					yAxis: {
						title: {
							text: null
						},
						lineWidth: 0,
						minorGridLineWidth: 0,
						gridLineWidth: 0,
						labels: {
							enabled: false
						}
					},
					legend: {
						layout: "vertical",
						align: "right",
						verticalAlign: "middle"
					},   
					plotOptions: {
						spline: {
							lineWidth: 2,
							marker: {
								lineWidth: 0,
								lineColor: "#ffffff",
								enabled: false
							}
						}
					},   
					series: [{
						data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
						showInLegend: false,
						color:"#FFF"
					}, 
					{
						data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
						showInLegend: false,
						color:"#000"
					}]
				}
			},
			periodicDemandGraph: {
				chartConfig:{
					credits: false,
					exporting: {
						enabled: false
					},
					chart: {
						spacingLeft: 0,
						spacingRight: 0,
						spacingTop: 0,
						spacingBottom: 0,
						width: 130,
						height: 50,
						type: "area"
					},
					title: {
						style: {
							display: "none"
						}
					},
					subtitle: {
						style: {
							display: "none"
						}
					},
					xAxis: {
						categories: ["1750", "1800", "1850", "1900", "1950", "1999", "2050"],
						tickmarkPlacement: "on",
						title: {
						},
						lineWidth: 0,
						minorGridLineWidth: 0,
						lineColor: "transparent",
						labels: {
							enabled: false
						},
						minorTickLength: 0,
						tickLength: 0
					},
					yAxis: {
						title: {
							text:null
						},
						lineWidth: 0,
						minorGridLineWidth: 0,
						gridLineWidth: 0,
						labels: {
							enabled: false
						}
					},
					plotOptions: {
						area: {
							stacking: "percent",
							lineColor: "#ffffff",
							lineWidth: 3,
							marker: {
								lineWidth: 0,
								lineColor: "#ffffff",
								enabled: false
							}
						}
					},
					series: [{
						data: [106, 107, 111, 133, 221, 767, 1766],
						showInLegend: false,
						color:"#0097D5"
					}, {
						data: [502, 635, 809, 947, 1402, 3634, 5268],
						showInLegend: false,
						color: "#00ADDD"
					}]
				}
			},
			targetGauge: {
				chartConfig : {
					credits: false,
					exporting: {
						enabled: false
					},
					chart: {
						spacingLeft: 0,
						spacingRight: 0,
						spacingTop: 0,
						spacingBottom: 0,
						width: 50,
						height: 50,
						type: 'solidgauge'
					},
					title: {
						style: {
							display: 'none'
						}
					},
					pane: {
						startAngle: 0,
						endAngle: 360,
						background: [
						{ // Track for Move
							outerRadius: '112%',
							innerRadius: '88%',
							backgroundColor: '#e0e0e0',
							borderWidth: 0
						}
						]
					},
					yAxis: {
						min: 0,
						max: 100,
						lineWidth: 0,
						tickPositions: []
					},
					plotOptions: {
						solidgauge: {
							dataLabels: {
								enabled: false
							},
							linecap: 'round',
							stickyTracking: false,
							rounded: true
						}
					},
					series: [
					{
						name: 'Move',
						data: [{
							color: '#275D80',
							radius: '112%',
							innerRadius: '88%',
							y: 80
						}]
					}]
				}
			},
			spendGauge: {
				chartConfig : {
					credits: false,
					exporting: {
						enabled: false
					},
					chart: {
						spacingLeft: 0,
						spacingRight: 0,
						spacingTop: 0,
						spacingBottom: 0,
						width: 260,
						height: 260,
						type: 'solidgauge',
						marginTop: 30
					},
					title: {
						text: 'Savings<br>$25.2',
						style: {
							fontSize: '20px',
							color: '#00AEEF',
							fontWeight: 'bold'
						},
						align: 'center',
						verticalAlign: 'middle'
					},
					pane: {
						startAngle: 0,
						endAngle: 360,
						background: [
						{ // Track for Move
							outerRadius: '112%',
							innerRadius: '88%',
							backgroundColor: '#e0e0e0',
							borderWidth: 0
						}, 
						{ // Track for Exercise
							outerRadius: '87%',
							innerRadius: '63%',
							backgroundColor: '#e0e0e0',
							borderWidth: 0
						}
						]
					},
					yAxis: {
						min: 0,
						max: 100,
						lineWidth: 0,
						tickPositions: []
					},
					plotOptions: {
						solidgauge: {
							dataLabels: {
								enabled: false
							},
							linecap: 'round',
							stickyTracking: false,
							rounded: true
						}
					},
					series: [
					{
						name: '2015',
						data: [{
							color: '#275D80',
							radius: '112%',
							innerRadius: '88%',
							y: 80
						}]
					}, 
					{
						name: '2016',
						data: [{
							color: '#00AEEF',
							radius: '87%',
							innerRadius: '63%',
							y: 65
						}]
					}]
				}
			},
			purposeOfTripGauge: {
				chartConfig: {
					credits: false,
					exporting: {
						enabled: false
					},
					chart: {
						width: 500,
						height: 300,
						plotBackgroundColor: null,
						plotBorderWidth: null,
						plotShadow: false,
						type: 'pie'
					},
					title: {
						text: 'Demand Management Summary',
						style: {
							float: 'left'
						}
					},
					tooltip: {
						pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
					},
					plotOptions: {
						pie: {
							allowPointSelect: true,
							cursor: 'pointer',
							dataLabels: {
								enabled: false
							},
							showInLegend: true
						}
					},
					legend: {
						layout: 'vertical',
						align: 'right',
						verticalAlign: 'middle'
					},
					series: [{
						name: 'Brands',
						colorByPoint: true,
						data: [{
							name: 'External Supplier',
							y: 56.33
						}, {
							name: 'Internal Abbott',
							y: 24.03,
							sliced: true,
							selected: true
						}, {
							name: 'Conference',
							y: 10.38
						}, {
							name: 'External Customer',
							y: 4.77
						}, {
							name: 'External Customer',
							y: 0.91
						}, {
							name: 'Training',
							y: 0.2
						}]
					}]
				}
			}
		}
	}
]