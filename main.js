// Initialise the needed variables
let f = h = g = 0;
let path = [];
let map = [[0,  0,  0,  0,  0],
           [0,  0,  0,  0,  0],
           [0,  0,  1,  0,  0],
           [0,  0,  1,  0,  0],
           [0,  0,  1,  0,  0]];
let start = [1, 1];
let end = [4, 4];
let relatives = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]];
//                 >               /^                 <                  ^             

function heuristicDistance(end, current) {
    distance_x = Math.pow(end[1] - current[1], 2);
    distance_y = Math.pow(end[0] - current[0], 2);
    h = distance_x + distance_y;

    return h;
}
function addPosition(pos1, pos2) {
    let x = pos1[1] + pos2[1];
    let y = pos1[0] + pos2[0];

    if(x == -1 && y >= 0) {
        return [y, 0];
    } else if(y == -1 && x >= 0) {
        return [0, x];
    } else if(x == -1 && y == -1) {
        return [0, 0];
    }

    return [y, x];
}

function aStar(map, start, end) {
    var current = start;
    path.push(start);

    for(i=1;i>0;i--) {
        let moves = [];
        let tmp = 0;
        let next_direction = 0;

        for(j=0;j<relatives.length;j++) {
            h = heuristicDistance(end, addPosition(current, relatives[j]));
            g = current[1] - start[1];
            f = g + h;
            moves.push(f);
        }

        for(test=1;test>0;test--) {
            console.log("test");
            tmp_current = current;
            tmp = Math.min(...moves);
            console.log("fk" + tmp);
            next_direction = moves.indexOf(tmp);
            next_direction = next_direction == -1 ? (moves.length) -1 : next_direction;

            current = addPosition(current, relatives[next_direction]);
            
            if(map[current[0]][current[1]] == 1) {
                moves = moves.splice(next_direction, 1);
                current = tmp_current;
                console.log("ups");
                test++;
            } else if(map[current[0]][current[1]] == 0) {
                test--;
                console.log("lkel");
            } else {
                console.log("crash");
                process.exit();
            }
        }

        path.push(current);
    
        if(JSON.stringify(current) == JSON.stringify(end)) {
            for(k=0;k<path.length;k++) {
                map[path[k][0]][path[k][1]] = "#";
            }
            console.log(map);
            console.log("Hello World!");
            break;
        } else {
            i++
        }
    }
}

aStar(map, start, end);





















/*
// Initialise the needed variables
let f = h = g = 0;
let path = [];
let map = [[0,  0,  0,  0,  0],
           [0,  0,  1,  0,  0],
           [0,  0,  1,  0,  0],
           [0,  0,  1,  0,  0],
           [0,  0,  1,  0,  0]];
let start = [0, 0];
let end = [4, 2];
let relatives = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]];
//                 >               /^                 <                  ^             

function heuristicDistance(end, current) {
    distance_x = Math.pow(end[1] - current[1], 2);
    distance_y = Math.pow(end[0] - current[0], 2);
    h = distance_x + distance_y;

    return h;
}
function addPosition(pos1, pos2) {
    let x = pos1[1] + pos2[1];
    let y = pos1[0] + pos2[0];

    if(x == -1 && y >= 0) {
        return [y, 0];
    } else if(y == -1 && x >= 0) {
        return [0, x];
    } else if(x == -1 && y == -1) {
        return [0, 0];
    }

    return [y, x];
}

function aStar(map, start, end) {
    var current = start;
    path.push(start);

    for(i=1;i>0;i--) {
        let moves = [];
        let tmp = 0;
        let tmp_current = [];
        let next_direction = 0;

        for(j=0;j<relatives.length;j++) {
            h = heuristicDistance(end, addPosition(current, relatives[j]));
            g = current[1] - start[1];
            f = g + h;
            moves.push(f);
            //console.log(f);
        }
        tmp = Math.min(...moves);
        next_direction = moves.indexOf(tmp);

        switch(next_direction) {
            case 0:
                current = addPosition(current, relatives[0]);
                break;
            case 1:
                current = addPosition(current, relatives[1]);
                break;
            case 2:
                current = addPosition(current, relatives[2]);
                break;
            case 3:
                current = addPosition(current, relatives[3]);
                break;
            case 4:
                current = addPosition(current, relatives[4]);
                break;
            case 5:
                current = addPosition(current, relatives[5]);
                break;
            case 6:
                current = addPosition(current, relatives[6]);
                break;
            case 7:
                current = addPosition(current, relatives[7]);
                break;
            case 8:
                current = addPosition(current, relatives[8]);
                break;
            default:
                break;
        }
        path.push(current);
    

        if(JSON.stringify(current) == JSON.stringify(end)) {
            for(k=0;k<path.length;k++) {
                map[path[k][0]][path[k][1]] = "#";
            }
            console.log(map);
            console.log("Hello World!");
            break;
        } else {
            i++
        }
    }
}

aStar(map, start, end);
*/