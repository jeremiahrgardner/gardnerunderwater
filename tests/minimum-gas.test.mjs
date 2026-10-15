import { test } from 'node:test';
import assert from 'node:assert/strict';
import { calculateMinimumGas, cylinders, minimumGasDefaults } from '../lib/minimum-gas.ts';
for(const [depth,cylinder,time,gas,raw,reserve] of [[100,'AL80',16.778,33.56,1300.6,1400],[60,'AL80',11,22,852.7,900],[130,'HP100',22.172,44.34,1526.3,1600],[30,'AL80',7.727,15.45,599,600]]) {
 test(`${depth} ft ${cylinder} matches the brief`, () => {
 const result=calculateMinimumGas({...minimumGasDefaults,...cylinders[cylinder],depth});
 assert.ok(Math.abs(result.surfaceMinutes-time)<0.001);
 assert.ok(Math.abs(result.gasCuFt-gas)<0.01);
 assert.ok(Math.abs(result.rawPsi-raw)<0.1);
 assert.equal(result.reservePsi,reserve);
 assert.ok(Math.abs(result.reserveBar-reserve/14.5038)<0.00001);
 assert.equal(result.segments.length,4);
 });
}
test('enforces floor and reports reserve beyond capacity', () => {
 const base={...minimumGasDefaults,...cylinders.AL80,depth:15};
 assert.equal(calculateMinimumGas({...base,sacPerDiver:0.1}).reservePsi,500);
 assert.equal(calculateMinimumGas({...base,sacPerDiver:100}).exceedsCylinder,true);
});
test('rejects physically invalid inputs instead of showing misleading reserves', () => {
 const base={...minimumGasDefaults,...cylinders.AL80,depth:100};
 for(const patch of [{depth:10},{ascentRate:0},{ratedVolume:0},{ratedPressure:0},{divers:1.5},{sacPerDiver:NaN},{problemMinutes:-1},{stopMinutes:-1},{stopDepth:-1}]) assert.throws(()=>calculateMinimumGas({...base,...patch}),RangeError);
});
