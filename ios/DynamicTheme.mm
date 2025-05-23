#import "DynamicTheme.h"

@implementation DynamicTheme
RCT_EXPORT_MODULE()

- (NSNumber *)getDynamicColorScheme:(double)a b:(double)b {
    NSNumber *result = @(a * b);

    return result;
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeDynamicThemeSpecJSI>(params);
}

@end