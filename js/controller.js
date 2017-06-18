var app = angular.module("geisonApp", []);

app.controller("myCtrl", function($scope) {

	$scope.isAttending = function(studentId, lessonId) {
		var presenca;
		$scope.attendances.forEach( function(arrayItem){
			if(arrayItem.lesson.id === lessonId){
				if(arrayItem.user.id === studentId){
					presenca = arrayItem.present;
				}
			}
		});
		return presenca;
	}

	$scope.areAllChecked = function(lessonId){

		var foundAttendances = findAttendancesBy(lessonId);
		var areAllChecked;
		for(var i = 0; i < foundAttendances.length ; i++){
			var attendance = foundAttendances[i];
			
			if(attendance === undefined || attendance.present === null){
				return null;
			}
			
			if( i === 0){
				areAllChecked = attendance.present;
			}else{
				if(areAllChecked !== attendance.present){
					return null;
				}
			}
		}
		
		return areAllChecked;
	}
	
	findAttendancesBy = function(lessonId){
		var foundAttendances = [];
		$scope.students.forEach( function(student){
			foundAttendances.push(findAttendanceBy(student.id, lessonId));
		});
		return foundAttendances;
	}
	
	
	findAttendanceBy = function(studentId, lessonId){
		var attendance;
		$scope.attendances.forEach( function(arrayItem){
			if(arrayItem.lesson.id === lessonId){
				if(arrayItem.user.id === studentId){
					attendance = arrayItem;
				}
			}
		});
		return attendance;
	}
	
	$scope.toggle = function(state, studentId, lessonId){
		var foundAttendance = false;
		$scope.attendances.forEach( function(arrayItem){
			if(arrayItem.lesson.id === lessonId){
				if(arrayItem.user.id === studentId){
					foundAttendance = true;
					if(state === true){
						arrayItem.present = false;
					}else{
						arrayItem.present = true;
					}
				}
			}
		});
		
		if(!foundAttendance)
			$scope.attendances.push(newAttendance(lessonId, studentId));		
	}
	
	$scope.checkAll = function(lessonId, areAllChecked){
		
		$scope.students.forEach( function(student){
			var attendance = findAttendanceBy(student.id, lessonId);
			
			if(attendance === undefined ){
				$scope.attendances.push(newAttendance(lessonId, student.id));
			}else {
				attendance.present = !areAllChecked;
			}
		});
	}

	newAttendance = function(lessonId, studentId){
		return {
			id : null,
			lesson : {
				id : lessonId
			},
			present : true,
			user : {
				id : studentId
			}
		};
	}
	
	$scope.students = [ {
		"id" : 15,
		"username" : "jaime",
		"email" : "jaime",
		"name" : "Jaime",
		"photo" : null
	}, {
		"id" : 31,
		"username" : "carol@gmail.com",
		"email" : "carol@gmail.com",
		"name" : "Carol",
		"photo" : null
	}, {
		"id" : 48,
		"username" : "c@gmail.com",
		"email" : "c@gmail.com",
		"name" : "Cleberson Charles Colombo Faccin",
		"photo" : null
	}, {
		"id" : 22840,
		"username" : "r@email.com",
		"email" : "r@email.com",
		"name" : "Rodrigo",
		"photo" : null
	}, {
		"id" : 29020,
		"username" : "c@email.com",
		"email" : null,
		"name" : "Caio",
		"photo" : null
	} ];

	$scope.lessons = [ {
		"id" : 59,
		"startDate" : 1456826400000,
		"endDate" : 1456830000000
	}, {
		"id" : 60,
		"startDate" : 1456999200000,
		"endDate" : 1457002800000
	}, {
		"id" : 61,
		"startDate" : 1457431200000,
		"endDate" : 1457434800000
	}, {
		"id" : 62,
		"startDate" : 1457604000000,
		"endDate" : 1457607600000
	}, {
		"id" : 63,
		"startDate" : 1458036000000,
		"endDate" : 1458039600000
	} ];

	$scope.attendances = [ {
		"id" : 6,
		"lesson" : {
			"id" : 58
		},
		"present" : true,
		"user" : {
			"id" : 15
		}
	}, {
		"id" : 819368,
		"lesson" : {
			"id" : 59
		},
		"present" : true,
		"user" : {
			"id" : 15
		}
	}, {
		"id" : 819367,
		"lesson" : {
			"id" : 59
		},
		"present" : true,
		"user" : {
			"id" : 48
		}
	}, {
		"id" : 967272,
		"lesson" : {
			"id" : 62
		},
		"present" : true,
		"user" : {
			"id" : 15
		}
	}, {
		"id" : 967273,
		"lesson" : {
			"id" : 62
		},
		"present" : true,
		"user" : {
			"id" : 31
		}
	}, {
		"id" : 967274,
		"lesson" : {
			"id" : 62
		},
		"present" : true,
		"user" : {
			"id" : 48
		}
	}, {
		"id" : 967275,
		"lesson" : {
			"id" : 62
		},
		"present" : true,
		"user" : {
			"id" : 22840
		}
	}, {
		"id" : 967276,
		"lesson" : {
			"id" : 62
		},
		"present" : true,
		"user" : {
			"id" : 29020
		}
	}, {
		"id" : 4,
		"lesson" : {
			"id" : 63
		},
		"present" : true,
		"user" : {
			"id" : 15
		}
	}, {
		"id" : 5,
		"lesson" : {
			"id" : 64
		},
		"present" : false,
		"user" : {
			"id" : 15
		}
	}, {
		"id" : 16,
		"lesson" : {
			"id" : 65
		},
		"present" : true,
		"user" : {
			"id" : 15
		}
	}, {
		"id" : 17,
		"lesson" : {
			"id" : 66
		},
		"present" : false,
		"user" : {
			"id" : 15
		}
	}, {
		"id" : 967232,
		"lesson" : {
			"id" : 66
		},
		"present" : true,
		"user" : {
			"id" : 29020
		}
	}, {
		"id" : 664012,
		"lesson" : {
			"id" : 67
		},
		"present" : true,
		"user" : {
			"id" : 15
		}
	}, {
		"id" : 664013,
		"lesson" : {
			"id" : 67
		},
		"present" : true,
		"user" : {
			"id" : 31
		}
	}, {
		"id" : 664014,
		"lesson" : {
			"id" : 67
		},
		"present" : true,
		"user" : {
			"id" : 48
		}
	}, {
		"id" : 664015,
		"lesson" : {
			"id" : 67
		},
		"present" : true,
		"user" : {
			"id" : 22840
		}
	}, {
		"id" : 664016,
		"lesson" : {
			"id" : 67
		},
		"present" : true,
		"user" : {
			"id" : 29020
		}
	}, {
		"id" : 664007,
		"lesson" : {
			"id" : 68
		},
		"present" : false,
		"user" : {
			"id" : 15
		}
	}, {
		"id" : 664008,
		"lesson" : {
			"id" : 68
		},
		"present" : false,
		"user" : {
			"id" : 31
		}
	}, {
		"id" : 664009,
		"lesson" : {
			"id" : 68
		},
		"present" : false,
		"user" : {
			"id" : 48
		}
	}, {
		"id" : 664010,
		"lesson" : {
			"id" : 68
		},
		"present" : false,
		"user" : {
			"id" : 22840
		}
	}, {
		"id" : 664011,
		"lesson" : {
			"id" : 68
		},
		"present" : false,
		"user" : {
			"id" : 29020
		}
	}, {
		"id" : 305303,
		"lesson" : {
			"id" : 90
		},
		"present" : false,
		"user" : {
			"id" : 15
		}
	}, {
		"id" : 305302,
		"lesson" : {
			"id" : 90
		},
		"present" : false,
		"user" : {
			"id" : 31
		}
	}, {
		"id" : 305306,
		"lesson" : {
			"id" : 90
		},
		"present" : false,
		"user" : {
			"id" : 22840
		}
	}, {
		"id" : 305307,
		"lesson" : {
			"id" : 90
		},
		"present" : false,
		"user" : {
			"id" : 29020
		}
	} ];
});