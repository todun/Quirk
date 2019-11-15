// Copyright 2017 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {ArithmeticGates} from "src/gates/ArithmeticGates.js"
import {AmplitudeDisplayFamily} from "src/gates/AmplitudeDisplay.js"
import {BitCountGates} from "src/gates/BitCountGates.js"
import {BlochSphereDisplay} from "src/gates/BlochSphereDisplay.js"
import {ComparisonGates} from "src/gates/ComparisonGates.js"
import {Controls} from "src/gates/Controls.js"
import {CountingGates} from "src/gates/CountingGates.js"
import {CycleBitsGates} from "src/gates/CycleBitsGates.js"
import {DensityMatrixDisplayFamily} from "src/gates/DensityMatrixDisplay.js"
import {ErrorInjectionGate} from "src/gates/Debug_ErrorInjectionGate.js"
import {ExponentiatingGates} from "src/gates/ExponentiatingGates.js"
import {FourierTransformGates} from "src/gates/FourierTransformGates.js"
import {HalfTurnGates} from "src/gates/HalfTurnGates.js"
import {
    ImaginaryGate,
    AntiImaginaryGate,
    SqrtImaginaryGate,
    AntiSqrtImaginaryGate
} from "src/gates/Joke_ImaginaryGate.js"
import {IncrementGates} from "src/gates/IncrementGates.js"
import {InputGates} from "src/gates/InputGates.js"
import {InterleaveBitsGates} from "src/gates/InterleaveBitsGates.js"
import {MeasurementGate} from "src/gates/MeasurementGate.js"
import {ModularIncrementGates} from "src/gates/ModularIncrementGates.js"
import {ModularAdditionGates} from "src/gates/ModularAdditionGates.js"
import {ModularMultiplicationGates} from "src/gates/ModularMultiplicationGates.js"
import {ModularMultiplyAccumulateGates} from "src/gates/ModularMultiplyAccumulateGates.js"
import {MultiplicationGates} from "src/gates/MultiplicationGates.js"
import {MultiplyAccumulateGates} from "src/gates/MultiplyAccumulateGates.js"
import {NeGate} from "src/gates/Joke_NeGate.js"
import {ParametrizedRotationGates} from "src/gates/ParametrizedRotationGates.js"
import {PhaseGradientGates} from "src/gates/PhaseGradientGates.js"
import {PivotFlipGates} from "src/gates/PivotFlipGates.js"
import {PostSelectionGates} from "src/gates/PostSelectionGates.js"
import {PoweringGates} from "src/gates/PoweringGates.js"
import {ProbabilityDisplayFamily} from "src/gates/ProbabilityDisplay.js"
import {QuarterTurnGates} from "src/gates/QuarterTurnGates.js"
import {ReverseBitsGateFamily} from "src/gates/ReverseBitsGate.js"
import {SampleDisplayFamily} from "src/gates/SampleDisplay.js"
import {Detectors} from "src/gates/Detector.js"
import {SpacerGate} from "src/gates/SpacerGate.js"
import {SwapGateHalf} from "src/gates/SwapGateHalf.js"
import {UniversalNotGate} from "src/gates/Impossible_UniversalNotGate.js"
import {VariousXGates} from "src/gates/VariousXGates.js"
import {VariousYGates} from "src/gates/VariousYGates.js"
import {VariousZGates} from "src/gates/VariousZGates.js"
import {XorGates} from "src/gates/XorGates.js"
import {ZeroGate} from "src/gates/Joke_ZeroGate.js"
import {seq} from "src/base/Seq.js"

let Gates = {};

/** Gates that have special behavior requiring custom code / logic to handle. */
Gates.Special = {
    Measurement: MeasurementGate,
    SwapHalf: SwapGateHalf
};
/**
 * Gates that display information without affecting the state.
 * (In reality these would require multiple runs of the circuit to do tomography.)
 */
Gates.Displays = {
    AmplitudeDisplayFamily: AmplitudeDisplayFamily,
    ProbabilityDisplayFamily: ProbabilityDisplayFamily,
    SampleDisplayFamily: SampleDisplayFamily,
    DensityMatrixDisplayFamily: DensityMatrixDisplayFamily,
    BlochSphereDisplay: BlochSphereDisplay
};
Gates.Arithmetic = ArithmeticGates;
Gates.BitCountGates = BitCountGates;
Gates.ComparisonGates = ComparisonGates;
Gates.Controls = Controls;
Gates.CountingGates = CountingGates;
Gates.CycleBitsGates = CycleBitsGates;
Gates.Displays.DensityMatrixDisplay = DensityMatrixDisplayFamily.ofSize(1);
Gates.Displays.DensityMatrixDisplay2 = DensityMatrixDisplayFamily.ofSize(2);
Gates.Displays.ChanceDisplay = Gates.Displays.ProbabilityDisplayFamily.ofSize(1);
Gates.ErrorInjection = ErrorInjectionGate;
Gates.Exponentiating = ExponentiatingGates;
Gates.FourierTransformGates = FourierTransformGates;
Gates.HalfTurns = HalfTurnGates;
Gates.ImaginaryGate = ImaginaryGate;
Gates.AntiImaginaryGate = AntiImaginaryGate;
Gates.SqrtImaginaryGate = SqrtImaginaryGate;
Gates.AntiSqrtImaginaryGate = AntiSqrtImaginaryGate;
Gates.IncrementGates = IncrementGates;
Gates.InputGates = InputGates;
Gates.InterleaveBitsGates = InterleaveBitsGates;
Gates.ModularIncrementGates = ModularIncrementGates;
Gates.ModularAdditionGates = ModularAdditionGates;
Gates.ModularMultiplicationGates = ModularMultiplicationGates;
Gates.ModularMultiplyAccumulateGates = ModularMultiplyAccumulateGates;
Gates.MultiplicationGates = MultiplicationGates;
Gates.MultiplyAccumulateGates = MultiplyAccumulateGates;
Gates.NeGate = NeGate;
Gates.OtherX = VariousXGates;
Gates.OtherY = VariousYGates;
Gates.OtherZ = VariousZGates;
Gates.ParametrizedRotationGates = ParametrizedRotationGates;
Gates.PhaseGradientGates = PhaseGradientGates;
Gates.PivotFlipGates = PivotFlipGates;
Gates.PostSelectionGates = PostSelectionGates;
Gates.Powering = PoweringGates;
Gates.QuarterTurns = QuarterTurnGates;
Gates.ReverseBitsGateFamily = ReverseBitsGateFamily;
Gates.Detectors = Detectors;
Gates.SpacerGate = SpacerGate;
Gates.UniversalNot = UniversalNotGate;
Gates.XorGates = XorGates;
Gates.ZeroGate = ZeroGate;

/** @type {!Array.<!Gate>} */
Gates.KnownToSerializer = [
    ...Controls.all,
    ...InputGates.all,
    MeasurementGate,
    SwapGateHalf,
    SpacerGate,
    UniversalNotGate,
    ErrorInjectionGate,
    ZeroGate,
    NeGate,
    ImaginaryGate,
    AntiImaginaryGate,
    SqrtImaginaryGate,
    AntiSqrtImaginaryGate,

    ...AmplitudeDisplayFamily.all,
    ...ProbabilityDisplayFamily.all,
    ...SampleDisplayFamily.all,
    ...DensityMatrixDisplayFamily.all,
    BlochSphereDisplay,

    ...ArithmeticGates.all,
    ...BitCountGates.all,
    ...ComparisonGates.all,
    ...CountingGates.all,
    ...CycleBitsGates.all,
    ...Detectors.all,
    ...ExponentiatingGates.all,
    ...FourierTransformGates.all,
    ...HalfTurnGates.all,
    ...IncrementGates.all,
    ...InterleaveBitsGates.all,
    ...ModularAdditionGates.all,
    ...ModularIncrementGates.all,
    ...ModularMultiplicationGates.all,
    ...ModularMultiplyAccumulateGates.all,
    ...MultiplicationGates.all,
    ...MultiplyAccumulateGates.all,
    ...QuarterTurnGates.all,
    ...ParametrizedRotationGates.all,
    ...PhaseGradientGates.all,
    ...PivotFlipGates.all,
    ...PostSelectionGates.all,
    ...PoweringGates.all,
    ...ReverseBitsGateFamily.all,
    ...VariousXGates.all,
    ...VariousYGates.all,
    ...VariousZGates.all,
    ...XorGates.all
];

let gatesById = seq(Gates.KnownToSerializer).keyedBy(g => g.serializedId);
/**
 * @param {!String} id
 * @param {!CustomGateSet} customGateSet
 * @returns {undefined|!Gate}
 */
Gates.findKnownGateById = (id, customGateSet) => {
    return gatesById.has(id) ? gatesById.get(id) : customGateSet.findGateWithSerializedId(id);
};

/** @type {!Array<!{hint: !string, gates: !Array<undefined|!Gate>}>} */
Gates.TopToolboxGroups = [
    {
        hint: "Probes",
        gates: [
            MeasurementGate,                  undefined,
            PostSelectionGates.PostSelectOff, PostSelectionGates.PostSelectOn,
            Controls.AntiControl,             Controls.Control
        ]
    },
    {
        hint: "Displays",
        gates: [
            undefined, undefined,
            DensityMatrixDisplayFamily.ofSize(1), BlochSphereDisplay,
            ProbabilityDisplayFamily.ofSize(1),   AmplitudeDisplayFamily.ofSize(2)
        ]
    },
    {
        hint: "Half Turns",
        gates: [
            HalfTurnGates.Z, SwapGateHalf,
            HalfTurnGates.Y, undefined,
            HalfTurnGates.X, HalfTurnGates.H
        ]
    },
    {
        hint: "Quarter Turns",
        gates: [
            QuarterTurnGates.SqrtZForward, QuarterTurnGates.SqrtZBackward,
            QuarterTurnGates.SqrtYForward, QuarterTurnGates.SqrtYBackward,
            QuarterTurnGates.SqrtXForward, QuarterTurnGates.SqrtXBackward
        ]
    },
    {
        hint: "Eighth Turns",
        gates: [
            VariousZGates.Z4, VariousZGates.Z4i,
            VariousYGates.Y4, VariousYGates.Y4i,
            VariousXGates.X4, VariousXGates.X4i,
        ]
    },
    {
        hint: "Spinning",
        gates: [
            PoweringGates.ZForward, PoweringGates.ZBackward,
            PoweringGates.YForward, PoweringGates.YBackward,
            PoweringGates.XForward, PoweringGates.XBackward,
        ]
    },
    {
        hint: "Formulaic",
        gates: [
            ParametrizedRotationGates.FormulaicRotationZ, ParametrizedRotationGates.FormulaicRotationRz,
            ParametrizedRotationGates.FormulaicRotationY, ParametrizedRotationGates.FormulaicRotationRy,
            ParametrizedRotationGates.FormulaicRotationX, ParametrizedRotationGates.FormulaicRotationRx,
        ]
    },
    {
        hint: "Parametrized",
        gates: [
            ParametrizedRotationGates.ZToA, ParametrizedRotationGates.ZToMinusA,
            ParametrizedRotationGates.YToA, ParametrizedRotationGates.YToMinusA,
            ParametrizedRotationGates.XToA, ParametrizedRotationGates.XToMinusA,
        ]
    },
    {
        hint: 'Sampling',
        gates: [
            Detectors.ZDetector, Detectors.ZDetectControlClear,
            Detectors.YDetector, Detectors.YDetectControlClear,
            Detectors.XDetector, Detectors.XDetectControlClear,
        ]
    },
    {
        hint: "Parity",
        gates: [
            Controls.ZParityControl, undefined,
            Controls.YParityControl, undefined,
            Controls.XParityControl, undefined,
        ]
    },
];

/** @type {!Array<!{hint: !string, gates: !Array<undefined|!Gate>}>} */
Gates.BottomToolboxGroups = [
    {
        hint: "X/Y Probes",
        gates: [
            Controls.XAntiControl, Controls.XControl,
            Controls.YAntiControl, Controls.YControl,
            PostSelectionGates.PostSelectAntiX, PostSelectionGates.PostSelectX,
            PostSelectionGates.PostSelectAntiY, PostSelectionGates.PostSelectY,
        ]
    },
    {
        hint: "Order",
        gates: [
            CountingGates.CountingFamily.ofSize(3),          CountingGates.UncountingFamily.ofSize(3),
            ReverseBitsGateFamily.ofSize(2), undefined,
            CycleBitsGates.CycleBitsFamily.ofSize(3),        CycleBitsGates.ReverseCycleBitsFamily.ofSize(3),
            InterleaveBitsGates.InterleaveBitsGateFamily.ofSize(6),
            InterleaveBitsGates.DeinterleaveBitsGateFamily.ofSize(6),
        ]
    },
    {
        hint: 'Frequency',
        gates: [
            FourierTransformGates.FourierTransformFamily.ofSize(2),
                FourierTransformGates.InverseFourierTransformFamily.ofSize(2),
            undefined, undefined,
            PhaseGradientGates.PhaseGradientFamily.ofSize(2),
                PhaseGradientGates.PhaseDegradientFamily.ofSize(2),
            PhaseGradientGates.DynamicPhaseGradientFamily.ofSize(2),
                PhaseGradientGates.DynamicPhaseDegradientFamily.ofSize(2),
        ]
    },
    {
        hint: "Inputs",
        gates: [
            InputGates.InputAFamily.ofSize(2), InputGates.SetA,
            InputGates.InputBFamily.ofSize(2), InputGates.SetB,
            InputGates.InputRFamily.ofSize(2), InputGates.SetR,
            undefined, undefined,
        ]
    },
    {
        hint: 'Arithmetic',
        gates: [
            IncrementGates.IncrementFamily.ofSize(2), IncrementGates.DecrementFamily.ofSize(2),
            ArithmeticGates.PlusAFamily.ofSize(2), ArithmeticGates.MinusAFamily.ofSize(2),
            MultiplyAccumulateGates.MultiplyAddInputsFamily.ofSize(2),
                MultiplyAccumulateGates.MultiplySubtractInputsFamily.ofSize(2),
            MultiplicationGates.TimesAFamily.ofSize(2), MultiplicationGates.TimesAInverseFamily.ofSize(2),
        ]
    },
    {
        hint: "Compare",
        gates: [
            ComparisonGates.ALessThanB, ComparisonGates.AGreaterThanB,
            ComparisonGates.ALessThanOrEqualToB, ComparisonGates.AGreaterThanOrEqualToB,
            ComparisonGates.AEqualToB, ComparisonGates.ANotEqualToB,
            undefined, undefined,
        ]
    },
    {
        hint: "Modular",
        gates: [
            ModularIncrementGates.IncrementModRFamily.ofSize(2), ModularIncrementGates.DecrementModRFamily.ofSize(2),
            ModularAdditionGates.PlusAModRFamily.ofSize(2), ModularAdditionGates.MinusAModRFamily.ofSize(2),
            ModularMultiplicationGates.TimesAModRFamily.ofSize(2),
                ModularMultiplicationGates.TimesAModRInverseFamily.ofSize(2),
            ModularMultiplicationGates.TimesBToTheAModRFamily.ofSize(2),
                ModularMultiplicationGates.TimesInverseBToTheAModRFamily.ofSize(2),
        ]
    },
    {
        hint: 'Scalar',
        gates: [
            SpacerGate, ZeroGate,
            NeGate, undefined,
            ImaginaryGate, AntiImaginaryGate,
            SqrtImaginaryGate, AntiSqrtImaginaryGate,
        ]
    },
];

/** @type {!Map.<undefined|!string, !Array.<!Gate>>} */
const INITIAL_STATES_TO_GATES = new Map([
    [undefined, []],
    ['1', [Gates.HalfTurns.X]],
    ['+', [Gates.HalfTurns.H]],
    ['-', [Gates.HalfTurns.H, Gates.HalfTurns.Z]],
    ['i', [Gates.HalfTurns.H, Gates.QuarterTurns.SqrtZForward]],
    ['-i', [Gates.HalfTurns.H, Gates.QuarterTurns.SqrtZBackward]]
]);

export {Gates, INITIAL_STATES_TO_GATES}
