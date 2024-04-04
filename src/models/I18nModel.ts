import { DefensiveType } from "../type/DefensiveType"
import { DescentType } from "../type/DescentType"
import { ExoticType } from "../type/ExoticType"
import { OffensiveType } from "../type/OffensiveType"
import { UtilityType } from "../type/UtilityType"

export interface I18nModel {
    type: {
        type: DescentType
        display: string
    }[]
    exotics: I18nDefailModel<ExoticType>[]
    offensives: I18nDefailModel<OffensiveType>[]
    defensives: I18nDefailModel<DefensiveType>[]
    utilites: I18nDefailModel<UtilityType>[]
}

export interface I18nDefailModel<T> {
    type: T
    display: string
    description?: string
}