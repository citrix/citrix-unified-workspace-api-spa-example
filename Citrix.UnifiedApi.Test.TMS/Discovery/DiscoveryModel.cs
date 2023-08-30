// Copyright © 2023. Cloud Software Group, Inc. All Rights Reserved.

using System.Text.Json.Serialization;

namespace Citrix.UnifiedApi.Test.TMS.Discovery;

public record DiscoveryModel(
    ServiceInformation[] Services,
    string[] AuthScopes,
    ClientSettings ClientSettings
);

public record ServiceInformation(string Service, Endpoint[] Endpoints);

public record Endpoint(string Id, string Url);

public record ClientSettings(string CustomerDomain, string AuthDomain, bool PromptLoginEnabled)
{
    [JsonPropertyName("acr_values")] public string AcrValues { get; set; } = null!;
}