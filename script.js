function calculate() {
    var wavelength = parseFloat(document.getElementById('wavelength').value);
    var bandGap = parseFloat(document.getElementById('bandGap').value);

    if (isNaN(wavelength) || isNaN(bandGap)) {
        document.getElementById('result').innerHTML = "<p>Please enter valid values for Wavelength and Band Gap.</p>";
        return;
    }

    var photonEnergy = 1240 / wavelength; // Convert wavelength from nm to eV
    var bandGapEnergyDiff = Math.abs(photonEnergy - bandGap);
    var message = `Photon energy: ${photonEnergy.toFixed(2)} eV<br>`;

    if (photonEnergy < bandGap) {
        message += `This photon has insufficient energy to excite electrons across the band gap.<br>`;
        message += `Band gap energy difference: ${bandGapEnergyDiff.toFixed(2)} eV`;
    } else {
        message += `This photon has sufficient energy to excite electrons across the band gap.<br>`;
        message += `Band gap energy difference: ${bandGapEnergyDiff.toFixed(2)} eV`;
    }

    document.getElementById('result').innerHTML = message;
}

function calculateRandomWavelength() {
    var randomWavelength = Math.random() * (800 - 300) + 300; // Random wavelength between 300nm and 800nm
    document.getElementById('wavelength').value = randomWavelength.toFixed(2);
}
