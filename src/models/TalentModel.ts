import { DescentType } from "../type/DescentType"

export namespace TalentModel {
    export interface ITalentModel {
        icon: string
        name: string
    }

    export interface ITalentSetModel {
        type: DescentType
        exotics: Array<ITalentModel>
        offensives: Array<ITalentModel>
        defensives: Array<ITalentModel>
        utilities: Array<ITalentModel>
    }
}