// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract SudoChain {
    struct initPoint{
        uint8 location;
        uint8 value;
    }

    struct Participant{
        address participant;
        uint256 submissionTime; 
        bool success;
    }

    initPoint[] public initLayout;
    Participant[] public participants;
    event SolutionSubmitted(address participant, uint when, bool isRight);
    uint256 public gameEnd;

    constructor(initPoint[] memory _layout) {
        for (uint8 i = 0; i < _layout.length; i++){
            initLayout.push(_layout[i]);
        }
        gameEnd = 1698314199; // 26 oct
    }

    function submitSolution(uint8[][] memory solution) external {
        
        for (uint8 i = 0; i < 9; i++) {
            for(uint8 j = 0; j < 9; j++){
                require(solution[i][j] <= 9, "Invalid solution input");
                require(solution[i][j] > 0, "Invalid solution input");
            }
        }
        
        participants.push(Participant(msg.sender, block.timestamp, isValidSolution(solution) ));
    }

    function isValidSolution(uint8[][] memory solution) private returns (bool){

        for (uint8 i = 0; i < 9; i++) {
            uint8[] memory rowSet = new uint8[](9);
            uint8[] memory colSet = new uint8[](9);
            uint8[] memory subgridSet = new uint8[](9);
            uint8 rS = 0;
            uint8 cS = 0;
            uint8 sS = 0;
            for (uint8 j = 0; j < 9; j++) {
                // Check rows
                if (rowSet.length > 0 && hasValue(solution[i][j], rowSet)) {
                    emit SolutionSubmitted(msg.sender, block.timestamp, false);
                    return false;
                }
                rowSet[rS] = solution[i][j];
                rS += 1;
                
                // Check columns
                if (hasValue(solution[j][i], colSet)) {
                    emit SolutionSubmitted(msg.sender, block.timestamp, false);
                    return false;
                }
                colSet[cS] = solution[j][i];
                cS += 1;

                // Check 3x3 subgrids
                uint8 row = 3 * (i / 3);
                uint8 col = 3 * (i % 3);
                uint8 cellValue = solution[row + (j / 3)][col + (j % 3)];
                if (hasValue(cellValue, subgridSet)) {
                    emit SolutionSubmitted(msg.sender, block.timestamp, false);
                    return false;
                }
                subgridSet[sS] = cellValue;
                sS += 1;
            }
        }   
        emit SolutionSubmitted(msg.sender, block.timestamp, true);
        return true;
        
    }

    function hasValue(uint256 value, uint8[] memory array) public pure returns (bool) {
        for (uint256 i = 0; i < 9; i++) {
            if (array[i] == value) {
                return true; 
            }
        }
        return false;
    }
}