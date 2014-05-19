define(['ko', 'jquery'], function (ko, $) {

    var mod = function () {
        // Wizard Fields
        this.CurrentStep = ko.observable(1);
        this.StepCount = ko.observable(4);
        this.IsLastStep = ko.computed(_get_last_step, this);
        this.WizProgress = ko.computed(_get_progress, this);

        // Policy Hodler Fields
        this.PolicyHolderFirstName = ko.observable('');
        this.PolicyHolderSurname = ko.observable('');
        this.PolicyHolderIdNumber = ko.observable('');
        this.PolicyHolderGender = ko.observable('');
        this.PolicyHolderDateOfBirth = ko.observable('');

        // Members
        this.PolicyMembers = ko.observableArray([]);
    };

    var fn = mod.prototype;

    fn.MoveToNextStep = function () {
        if (eval('this._on_next_step_' + this.CurrentStep() + '()'))
            this.CurrentStep(this.CurrentStep() + 1);
    };

    fn.MoveToPreviousStep = function () {
        this.CurrentStep(this.CurrentStep() - 1);
    };

    fn.Age = function (obj) {
        return obj.DateOfBirth();

    };

    var _get_last_step = function () {
        return this.StepCount() === this.CurrentStep();
    };

    var _get_progress = function () {
        return this.CurrentStep() / this.StepCount() * 100;
    };


    var _add_update_policy_holder_as_member = function () {
        var policyHolder = $.grep(this.PolicyMembers(), function (p) {
            return p.Relationship == 'Policy Holder';
        })[0];

        if (policyHolder === undefined) {
            this.PolicyMembers.push({
                Relationship: 'Policy Holder',
                FirstName: ko.observable(this.PolicyHolderFirstName()),
                Surname: ko.observable(this.PolicyHolderSurname()),
                IdNumber: ko.observable(this.PolicyHolderIdNumber()),
                DateOfBirth: ko.observable(this.PolicyHolderDateOfBirth()),
                Gender: ko.observable(this.PolicyHolderGender())
            });
        }
        else {
            policyHolder.FirstName(this.PolicyHolderFirstName());
            policyHolder.Surname(this.PolicyHolderSurname());
            policyHolder.IdNumber(this.PolicyHolderIdNumber());
            policyHolder.DateOfBirth(this.PolicyHolderDateOfBirth());
            policyHolder.Gender(this.PolicyHolderGender());
        }
    };

    // Wizard Step On Next
    fn._on_next_step_1 = function () {
        _add_update_policy_holder_as_member.call(this);
        return true;
    };

    return mod;
});