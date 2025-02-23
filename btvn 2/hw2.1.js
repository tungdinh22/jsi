let cargoHold = [
    'oxygen tanks',
    'space suits',
    'parrot',
    'instruction manual',
    'meal packs',
    'slinky',
    'security blanket'
];

// Thay 'slinky' 
let index = cargoHold.indexOf('slinky');
if (index !== -1) {
    cargoHold[index] = 'space tether';
}
console.log("Sau khi thay đổi 'slinky':", cargoHold);

// Xóa phần tử cuối 
let removedLast = cargoHold.pop();