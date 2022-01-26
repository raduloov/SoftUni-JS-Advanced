function solve(input) {
  if (input.dizziness) {
    return {
      weight: input.weight,
      experience: input.experience,
      levelOfHydrated: input.levelOfHydrated + 0.1 * input.weight * input.experience,
      dizziness: false,
    };
  } else {
    return input;
  }
}

console.log(
  solve({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true })
);
console.log(
  solve({ weight: 120, experience: 20, levelOfHydrated: 200, dizziness: true })
);
