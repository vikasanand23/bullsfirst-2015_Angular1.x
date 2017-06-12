app.controller('AccountsController', function($scope) {
    $scope.rows = [{
            name: 'Brokerage Account 3',
            marketValue: 1999990,
            cash: 1995826,
            legend: 'orange'
        },
        {
            name: 'Account 3',
            marketValue: 1949990,
            cash: 1695856,
            legend: 'darkorange'
        },
        {
            name: 'Brokerage Account 1',
            marketValue: 1349990,
            cash: 1595866,
            legend: 'red'
        },
        {
            name: 'Brokerage Account 4',
            marketValue: 155990,
            cash: 160826,
            legend: 'blue'
        },
        {
            name: 'Brokerage Account 2',
            marketValue: 74560,
            cash: 19956,
            legend: 'gray'
        },
        {
            name: 'Account 4',
            marketValue: 55006,
            cash: 53006,
            legend: 'salmon'
        },
        {
            name: 'Account 13',
            marketValue: 37340,
            cash: 0,
            legend: 'green'
        },
        {
            name: 'Joint Account 1',
            marketValue: 28308,
            cash: 4167,
            legend: 'darkblue'
        },
        {
            name: 'Joint Account 2',
            marketValue: 10000,
            cash: 10000,
            legend: 'teal'
        }
    ];

    // Vikas Anand Code here //
    $scope.names = [];
    $scope.mValues = [];
    $scope.cashes = [];
    $scope.legends = [];

    $scope.UpdateAccount = function() {
        $scope.totals.marketValue += $scope.rows[i].marketValue;
        $scope.totals.cash += $scope.rows[i].cash;
		
        $scope.names.push($scope.rows[i].name);
        $scope.mValues.push($scope.rows[i].marketValue);
        $scope.cashes.push($scope.rows[i].cash);
        $scope.legends.push($scope.rows[i].legend);
    }
    //Vikas Anand Ends

    $scope.totals = {
        name: '',
        marketValue: 0,
        cash: 0,
        legend: 'none'
    };

    for (var i = 0; i < $scope.rows.length; i++) {
        $scope.UpdateAccount();
    }

    $scope.addAccount = function() {
        $scope.rows.push({
            name: 'New Account',
            marketValue: Math.random() * 100000,
            cash: Math.random() * 400000,
            legend: 'cyan'
        });
        $scope.UpdateAccount();
    }

    //Vikas Anand Starts
    $scope.refreshAccount = function() {
        alert("Total account entered in app are : " + $scope.rows.length);
    }

    $scope.tradeAccount = function() {
        alert("Your trade account is ready with " + $scope.rows.length + " account. You can trade any one of them");
    }

    $scope.transferAccount = function() {
        alert("You have " + $scope.rows.length + " accounts. You can now transfer the amount.");
    }

    $scope.labels = $scope.names;
    $scope.data = $scope.mValues;
    //Make sure to use color codes, instead of color name.
    $scope.colorsPie = $scope.legends;
    //PieDataSetOverride is used to draw lines to display the labels
    $scope.options = {
        elements: {
            arc: {
                borderWidth: 0
            }
        }
    };

    $scope.PieDataSetOverride = [{
        yAxisID: 'y-axis-1'
    }]; //y-axis-1 is the ID defined in scales under options.

    $scope.optionsPie = {
        legend: {
            display: true
        },
        responsive: true, // set to false to remove responsiveness. Default responsive value is true.
        scales: {
            yAxes: [{
                id: 'y-axis-1',
                type: 'linear',
                display: true,
                position: 'left'
            }]
        }
    }
	
	$scope.Employee = {
        EmpNo: 0,
        EmpName: "",
    };
    //3.
    $scope.Employee.EmpName = 'MS';
 
    //4.
    $scope.lower = function (ename) {
        return ename.toLowerCase(); 
    };
});
