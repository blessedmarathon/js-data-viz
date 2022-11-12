function makeChartForAccommodationPrice(accommodations) {
    const accomodationPrice = {
      lessThan500: 0,
      lessThan1000: 0,
      lessThan2000: 0,
      lessThan3000: 0,
      lessThan4000: 0,
      moreThan3999: 0 
    };
  
    accommodations.forEach(accommodation => {
      if (accommodation.price < 500) {
        accomodationPrice.lessThan500 += 1;
      } else if (accommodation.price < 1000) {
        accomodationPrice.lessThan1000 += 1;
      } else if (accommodation.price < 2000) {
        accomodationPrice.lessThan2000 += 1;
      } else if (accommodation.price < 3000) {
        accomodationPrice.lessThan3000 += 1;
      } else if (accommodation.price < 4000) {
        accomodationPrice.lessThan4000 += 1;
      } else {
        accomodationPrice.moreThan3999 += 1;
      }
    });
  
    Highcharts.chart('accomodation-price-chart', {
      chart: {
        type: 'pie'
      },
      title: {
          text: 'Accommodation price'
      },
      series: [{
        name: 'Brands',
        innerSize: '40%',
        colorByPoint: true,
        data: [{
          name: 'Less Than 500',
          y: accomodationPrice.lessThan500
        }, {
          name: 'Less Than 1000',
          y: accomodationPrice.lessThan1000
        }, {
          name: 'Less Than 2000',
          y: accomodationPrice.lessThan2000
        }, {
          name: 'Less Than 3000',
          y: accomodationPrice.lessThan3000
        }, {
          name: 'Less Than 4000',
          y: accomodationPrice.lessThan4000
        }, {
          name: 'Less Than 3999',
          y: accomodationPrice.moreThan3999
        }]
      }]

    });
  }