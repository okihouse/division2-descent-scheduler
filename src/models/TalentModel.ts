import { DescentType } from "../type/DescentType"

export namespace TalentModel {
    export interface ITalentModel {
        icon: string
        name: string
        description?: string
    }

    export interface ITalentSetModel {
        type: DescentType
        display?: string
        exotics?: Array<ITalentModel>
        offensives?: Array<ITalentModel>
        defensives?: Array<ITalentModel>
        utilities?: Array<ITalentModel>
    }
}