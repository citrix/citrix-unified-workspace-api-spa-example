// Copyright © 2023. Cloud Software Group, Inc. All Rights Reserved.

namespace Citrix.UnifiedApi.Test.TMS
{
    public record FrontEndSettings
    {
        /// <summary>
        ///     Url to redirect the user to after login. Should be under the <see cref="FrontEndCorsOrigin" />.
        ///     <example>https://www.frontend.example/</example>
        /// </summary>
        public string? FrontEndRedirectUrl { get; set; }

        /// <summary>
        ///     Origin to be allowed under the Cors policy.
        ///     <example>https://www.frontend.example</example>
        /// </summary>
        public string? FrontEndCorsOrigin { get; set; }
    }
}