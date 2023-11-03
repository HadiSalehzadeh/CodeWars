/*
Given the molecular mass of two molecules and their masses present in a vessel of volume at a specific temperature find the total pressure exerted by the molecules. Formula to calculate the pressure is:
*/

solution= (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
  return (givenMass1/molarMass1 + givenMass2/molarMass2) * 0.082 * (temp+273.15) / volume;
}