// src/RulesPoliciesProjects.js
import { useState } from 'react';

import './shared/styles/index.css';

const RulesPoliciesProjects = () => {
    const [rules, setRules] = useState<any[]>([]);
    const [projects, setProjects] = useState<any[]>([]);
    const [policies, setPolicies] = useState<any[]>([]);
    
    const [ruleName, setRuleName] = useState('');
    const [ruleType, setRuleType] = useState('');
    const [projectName, setProjectName] = useState('');
    const [policyName, setPolicyName] = useState('');
    const [selectedRules, setSelectedRules] = useState<any[]>([]);
    const [selectedProject, setSelectedProject] = useState<any>();

    const addRule = () => {
        setRules([...rules, { name: ruleName, type: ruleType }]);
        setRuleName('');
        setRuleType('');
    };

    const addProject = () => {
        setProjects([...projects, { name: projectName }]);
        setProjectName('');
    };

    const addPolicy = () => {
        setPolicies([...policies, { name: policyName, rules: selectedRules, project: selectedProject }]);
        setPolicyName('');
        setSelectedRules([]);
        setSelectedProject('');
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Manage Rules, Policies, and Projects</h1>

            <div className="mb-6">
                <h2 className="text-xl font-semibold">Add Rule</h2>
                <input 
                    type="text" 
                    placeholder="Rule Name" 
                    value={ruleName}
                    onChange={(e) => setRuleName(e.target.value)}
                    className="border p-2 mr-2"
                />
                <input 
                    type="text" 
                    placeholder="Rule Type" 
                    value={ruleType}
                    onChange={(e) => setRuleType(e.target.value)}
                    className="border p-2 mr-2"
                />
                <button onClick={addRule} className="bg-blue-500 text-white p-2">Add Rule</button>
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-semibold">Add Project</h2>
                <input 
                    type="text" 
                    placeholder="Project Name" 
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    className="border p-2 mr-2"
                />
                <button onClick={addProject} className="bg-blue-500 text-white p-2">Add Project</button>
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-semibold">Add Policy</h2>
                <input 
                    type="text" 
                    placeholder="Policy Name" 
                    value={policyName}
                    onChange={(e) => setPolicyName(e.target.value)}
                    className="border p-2 mr-2"
                />
                <select multiple onChange={(e) => {
                    const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
                    setSelectedRules(selectedOptions);
                }} className="border p-2 mr-2">
                    {rules.map((rule, index) => (
                        <option key={index} value={rule.name}>{rule.name}</option>
                    ))}
                </select>
                <select multiple onChange={(e) => {
                    const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
                    setSelectedProject(selectedOptions[0]);
                }} className="border p-2 mr-2">
                    {projects.map((project, index) => (
                        <option key={index} value={project.name}>{project.name}</option>
                    ))}
                </select>
                <button onClick={addPolicy} className="bg-blue-500 text-white p-2">Add Policy</button>
            </div>

            <div>
                <h2 className="text-xl font-semibold">Current Rules</h2>
                <ul>
                    {rules.map((rule, index) => (
                        <li key={index}>{rule.name} - {rule.type}</li>
                    ))}
                </ul>
            </div>

            <div>
                <h2 className="text-xl font-semibold">Current Projects</h2>
                <ul>
                    {projects.map((project, index) => (
                        <li key={index}>{project.name}</li>
                    ))}
                </ul>
            </div>

            <div>
                <h2 className="text-xl font-semibold">Current Policies</h2>
                <ul>
                    {policies.map((policy, index) => (
                        <li key={index}>{policy.name} - Project: {policy.project}; Rules: {policy.rules.join(', ')}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RulesPoliciesProjects;