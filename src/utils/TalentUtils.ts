import NotFound from '../assets/NotFound.png'
import Defensive from '../assets/defensives'
import ExoticAsset from '../assets/exotics'
import Offensive from '../assets/offensivs'
import Utility from '../assets/utilities'
import { TalentModel } from '../models/TalentModel'
import { DescentType } from '../type/DescentType'

export default class TalentUtils {
    static talent(type: DescentType): TalentModel.ITalentSetModel | undefined {
        const pools = [
            {
                type: DescentType.envy,
                exotics: [
                    { icon: ExoticAsset.PlagueOfTheOutcasts, name: 'Plague of the Outcasts' },
                    { icon: ExoticAsset.AgonizingBite, name: 'Agonizing Bite' },
                    { icon: ExoticAsset.IncessantChatter, name: 'Incessant Chatter' },
                    { icon: ExoticAsset.BulletHell, name: 'Bullet Hell' },
                    { icon: ExoticAsset.PaymentinKind, name: 'Paymentin Kind' },
                    { icon: ExoticAsset.LibertyorDeath, name: 'Libertyor Death' },
                ],
                offensives: [
                    { icon: Offensive.Allegro, name: 'Allegro' },
                    { icon: NotFound, name: 'Clitical' },
                    { icon: NotFound, name: 'Precise' },
                    { icon: NotFound, name: 'Surgical' },
                    { icon: Offensive.Strained, name: 'Strained' },
                    { icon: Offensive.Vigilance, name: 'Vigilance' },
                    { icon: Offensive.Unhinged, name: 'Unhinged' },
                    { icon: Offensive.Rifleman, name: 'Rifleman' },
                    { icon: Offensive.ClosePersonal, name: 'Close & Personal' },
                    { icon: Offensive.Obliterate, name: 'Obliterate' },
                    { icon: Offensive.Pummel, name: 'Pummel' },
                    { icon: Offensive.Spark, name: 'Spark' },
                ],
                defensives: [
                    { icon: NotFound, name: 'Insulated' },
                    { icon: Defensive.AdrenalineRush, name: 'Adrenaline Rush' },
                    { icon: Defensive.Clutch, name: 'Clutch' },
                    { icon: Defensive.Efficient, name: 'Efficient' },
                    { icon: Defensive.Entrench, name: 'Entrench' },
                    { icon: Defensive.Leadership, name: 'Leadership' },
                    { icon: NotFound, name: 'Preservation' },
                    { icon: Defensive.ProtectedReload, name: 'Protected Reload' },
                    { icon: Defensive.Protector, name: 'Protector' },
                    { icon: Defensive.Safeguard, name: 'Safeguard' },
                    { icon: Defensive.Vanguard, name: 'Vanguard' },
                ],
                utilities: [
                    { icon: NotFound, name: 'Empowered' },
                    { icon: Utility.Extra, name: 'Extra' },
                    { icon: Utility.Surge, name: 'Surge' },
                    { icon: Utility.Optimized, name: 'Optimized' },
                    { icon: Utility.ShockedandAwe, name: 'ShockedandAwe' },
                    { icon: Utility.Perpetuation, name: 'Perpetuation' },
                    { icon: Utility.Ignited, name: 'Ignited' },
                    { icon: Utility.Eyeless, name: 'Eyeless' },
                    { icon: Utility.Trauma, name: 'Trauma' },
                    { icon: Utility.Sadist, name: 'Sadist' },
                    { icon: Utility.LuckyShot, name: 'Lucky Shot' },
                    { icon: Utility.FastHands, name: 'Fast Hands' },
                ]
            },
            {
                type: DescentType.gluttony,
                exotics: [
                    { icon: ExoticAsset.EmpathicResolve, name: 'Empathic Resolve' },
                    { icon: ExoticAsset.KineticMomentum, name: 'Kinetic Momentum' },
                    { icon: ExoticAsset.DoctorHome, name: 'Doctor Home' },
                    { icon: NotFound, name: 'Busy Little Bee' },
                    { icon: ExoticAsset.AgonizingBite, name: 'Agonizing Bite' },
                    { icon: ExoticAsset.AdaptiveInstincts, name: 'Adaptive Instincts' },
                ],
                offensives: [
                    { icon: Offensive.Allegro, name: 'Allegro' },
                    { icon: NotFound, name: 'Clitical' },
                    { icon: NotFound, name: 'Precise' },
                    { icon: NotFound, name: 'Surgical' },
                    { icon: NotFound, name: 'Breadbasket' },
                    { icon: Offensive.Companion, name: 'Companion' },
                    { icon: Offensive.Concussion, name: 'Concussion' },
                    { icon: Offensive.Overwatch, name: 'Overwatch' },
                    { icon: Offensive.Optimist, name: 'Optimist' },
                    { icon: Offensive.Vigilance, name: 'Vigilance' },
                    { icon: Offensive.Rifleman, name: 'Rifleman' },
                    { icon: Offensive.Composure, name: 'Composure' },
                ],
                defensives: [
                    { icon: NotFound, name: 'Insulated' },
                    { icon: Defensive.AdrenalineRush, name: 'Adrenaline Rush' },
                    { icon: Defensive.Clutch, name: 'Clutch' },
                    { icon: Defensive.Efficient, name: 'Efficient' },
                    { icon: Defensive.Entrench, name: 'Entrench' },
                    { icon: Defensive.Leadership, name: 'Leadership' },
                    { icon: NotFound, name: 'Preservation' },
                    { icon: Defensive.ProtectedReload, name: 'Protected Reload' },
                    { icon: Defensive.Protector, name: 'Protector' },
                    { icon: Defensive.Safeguard, name: 'Safeguard' },
                    { icon: Defensive.Vanguard, name: 'Vanguard' },
                ],
                utilities: [
                    { icon: NotFound, name: 'Capacitive' },
                    { icon: Utility.Optimized, name: 'Optimized' },
                    { icon: Utility.Extra, name: 'Extra' },
                    { icon: NotFound, name: 'Restorative' },
                    { icon: Utility.Surge, name: 'Surge' },
                    { icon: NotFound, name: 'Destructive' },
                    { icon: Utility.ShockedandAwe, name: 'Shocked and Awe' },
                    { icon: Utility.Salvage, name: 'Salvage' },
                    { icon: Utility.Spike, name: 'Spike' },
                    { icon: Utility.Opportunistic, name: 'Opportunistic' },
                ]
            },
            {
                type: DescentType.greed,
                exotics: [
                    { icon: ExoticAsset.AgonizingBite, name: 'Agonizing Bite' },
                    { icon: ExoticAsset.BreatheFree, name: 'Breathe Free' },
                    { icon: ExoticAsset.DoctorHome, name: 'Doctor Home' },
                    { icon: ExoticAsset.GlassCannon, name: 'GlassCannon' },
                    { icon: ExoticAsset.Regicide, name: 'Regicide' },
                    { icon: ExoticAsset.Sandman, name: 'Sandman' },
                ],
                offensives: [
                    { icon: Offensive.Allegro, name: 'Allegro' },
                    { icon: NotFound, name: 'Clitical' },
                    { icon: NotFound, name: 'Precise' },
                    { icon: NotFound, name: 'Surgical' },
                    { icon: Offensive.Concussion, name: 'Concussion' },
                    { icon: NotFound, name: 'Breadbasket' },
                    { icon: Offensive.Optimist, name: 'Optimist' },
                    { icon: Offensive.Vigilance, name: 'Vigilance' },
                    { icon: Offensive.Rifleman, name: 'Rifleman' },
                    { icon: Offensive.Pummel, name: 'Pummel' },
                    { icon: Offensive.ClosePersonal, name: 'Close & Personal' },
                    { icon: Offensive.Intimidate, name: 'Intimidate' },
                ],
                defensives: [
                    { icon: NotFound, name: 'Insulated' },
                    { icon: Defensive.AdrenalineRush, name: 'Adrenaline Rush' },
                    { icon: Defensive.Clutch, name: 'Clutch' },
                    { icon: Defensive.Efficient, name: 'Efficient' },
                    { icon: Defensive.Entrench, name: 'Entrench' },
                    { icon: Defensive.Leadership, name: 'Leadership' },
                    { icon: NotFound, name: 'Preservation' },
                    { icon: Defensive.ProtectedReload, name: 'Protected Reload' },
                    { icon: Defensive.Protector, name: 'Protector' },
                    { icon: Defensive.Safeguard, name: 'Safeguard' },
                    { icon: Defensive.Vanguard, name: 'Vanguard' },
                ],
                utilities: [
                    { icon: NotFound, name: 'Capacitive' },
                    { icon: NotFound, name: 'Destructive' },
                    { icon: NotFound, name: 'Empowered' },
                    { icon: Utility.Extra, name: 'Extra' },
                    { icon: Utility.Optimized, name: 'Optimized' },
                    { icon: NotFound, name: 'Restorative' },
                    { icon: Utility.Surge, name: 'Surge' },
                    { icon: Utility.Spike, name: 'Spike' },
                    { icon: Utility.Opportunistic, name: 'Opportunistic' },
                    { icon: Utility.Salvage, name: 'Salvage' },
                    { icon: Utility.Braced, name: 'Braced' },
                ]
            },
            {
                type: DescentType.sloth,
                exotics: [
                    { icon: ExoticAsset.Capacitance, name: 'Capacitance' },
                    { icon: ExoticAsset.DisruptorRounds, name: 'Disruptor Rounds' },
                    { icon: NotFound, name: 'Busy Little Bee' },
                    { icon: ExoticAsset.KineticMomentum, name: 'Kinetic Momentum' },
                    { icon: ExoticAsset.LibertyorDeath, name: 'Libertyor Death' },
                    { icon: ExoticAsset.IncessantChatter, name: 'Incessant Chatter' },
                ],
                offensives: [
                    { icon: Offensive.Allegro, name: 'Allegro' },
                    { icon: NotFound, name: 'Clitical' },
                    { icon: NotFound, name: 'Precise' },
                    { icon: NotFound, name: 'Surgical' },
                    { icon: Offensive.Companion, name: 'Companion' },
                    { icon: Offensive.Composure, name: 'Composure' },
                    { icon: Offensive.Gunslinger, name: 'Gunslinger' },
                    { icon: Offensive.Overwatch, name: 'Overwatch' },
                    { icon: Offensive.Spark, name: 'Spark' },
                    { icon: Offensive.Intimidate, name: 'Intimidate' },
                    { icon: Offensive.Vigilance, name: 'Vigilance' },
                    { icon: Offensive.Versatile, name: 'Versatile' },
                ],
                defensives: [
                    { icon: NotFound, name: 'Insulated' },
                    { icon: Defensive.AdrenalineRush, name: 'Adrenaline Rush' },
                    { icon: Defensive.Clutch, name: 'Clutch' },
                    { icon: Defensive.Efficient, name: 'Efficient' },
                    { icon: Defensive.Entrench, name: 'Entrench' },
                    { icon: Defensive.Leadership, name: 'Leadership' },
                    { icon: NotFound, name: 'Preservation' },
                    { icon: Defensive.ProtectedReload, name: 'Protected Reload' },
                    { icon: Defensive.Protector, name: 'Protector' },
                    { icon: Defensive.Safeguard, name: 'Safeguard' },
                    { icon: Defensive.Vanguard, name: 'Vanguard' },
                ],
                utilities: [
                    { icon: NotFound, name: 'Capacitive' },
                    { icon: NotFound, name: 'Destructive' },
                    { icon: NotFound, name: 'Empowered' },
                    { icon: Utility.Optimized, name: 'Optimized' },
                    { icon: Utility.Surge, name: 'Surge' },
                    { icon: Utility.Spike, name: 'Spike' },
                    { icon: Utility.Energize, name: 'Energize' },
                    { icon: Utility.TechSupport, name: 'Tech Support' },
                    { icon: Utility.Skilled, name: 'Skilled' },
                    { icon: Utility.InSync, name: 'InSync' },
                ]
            },
            {
                type: DescentType.wrath,
                exotics: [
                    { icon: ExoticAsset.Bloodsucker, name: 'Bloodsucker' },
                    { icon: ExoticAsset.AdaptiveInstincts, name: 'Adaptive Instincts' },
                    { icon: ExoticAsset.BulletHell, name: 'Bullet Hell' },
                    { icon: ExoticAsset.Sandman, name: 'Sandman' },
                    { icon: ExoticAsset.PlagueOfTheOutcasts, name: 'Plague of the Outcasts' },
                    { icon: ExoticAsset.DoctorHome, name: 'Doctor Home' },
                ],
                offensives: [
                    { icon: Offensive.Allegro, name: 'Allegro' },
                    { icon: NotFound, name: 'Clitical' },
                    { icon: NotFound, name: 'Precise' },
                    { icon: NotFound, name: 'Surgical' },
                    { icon: Offensive.Unhinged, name: 'Unhinged' },
                    { icon: Offensive.Strained, name: 'Strained' },
                    { icon: Offensive.Versatile, name: 'Versatile' },
                    { icon: Offensive.Intimidate, name: 'Intimidate' },
                    { icon: Offensive.Pummel, name: 'Pummel' },
                    { icon: Offensive.Overwhelm, name: 'Overwhelm' },
                    { icon: Offensive.Vigilance, name: 'Vigilance' },
                    { icon: Offensive.Strained, name: 'Strained' },
                ],
                defensives: [
                    { icon: NotFound, name: 'Insulated' },
                    { icon: Defensive.AdrenalineRush, name: 'Adrenaline Rush' },
                    { icon: Defensive.Clutch, name: 'Clutch' },
                    { icon: Defensive.Efficient, name: 'Efficient' },
                    { icon: Defensive.Entrench, name: 'Entrench' },
                    { icon: Defensive.Leadership, name: 'Leadership' },
                    { icon: NotFound, name: 'Preservation' },
                    { icon: Defensive.ProtectedReload, name: 'Protected Reload' },
                    { icon: Defensive.Protector, name: 'Protector' },
                    { icon: Defensive.Safeguard, name: 'Safeguard' },
                    { icon: Defensive.Vanguard, name: 'Vanguard' },
                ],
                utilities: [
                    { icon: NotFound, name: 'Capacitive' },
                    { icon: NotFound, name: 'Destructive' },
                    { icon: Utility.Extra, name: 'Extra' },
                    { icon: Utility.Optimized, name: 'Optimized' },
                    { icon: Utility.LuckyShot, name: 'Lucky Shot' },
                    { icon: Utility.SteadyHands, name: 'Steady Hands' },
                    { icon: Utility.Braced, name: 'Braced' },
                    { icon: Utility.MadBomber, name: 'Mad Bomber' },
                    { icon: Utility.Eyeless, name: 'Eyeless' },
                    { icon: Utility.Vindictive, name: 'Vindictive' },
                    { icon: Utility.Trauma, name: 'Trauma' },
                    { icon: Utility.Salvage, name: 'Salvage' },
                ]
            },
        ]

        return pools.find(p => p.type === type)
    }
}