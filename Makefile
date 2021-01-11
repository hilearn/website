PROJECT = website
PYTHON=python3.8
PYTHON_VERSION=$(shell ${PYTHON} --version 2>&1 | cut -c 8-10)
venv_name = py${PYTHON_VERSION}-${PROJECT}
venv = .venv/${venv_name}

# Commands that activate and run virtual environment versions.
_python = . ${venv}/bin/activate; python
_pip = . ${venv}/bin/activate; pip

default: update_venv submodules
.PHONY: default



pull:
	git pull origin master
	git submodule update
.PHONY: pul

submodules:
	git submodule update --init --recursive
.PHONY: submodules

update_submodules:
	git submodule update --remote
.PHONY: update_submodules


${venv}/bin/pip: requirements.txt
	python${PYTHON_VERSION} -m venv ${venv}
	${_pip} install -r requirements.txt --cache .tmp/

update_venv: requirements.txt ${venv}/bin/pip
	${_pip} install -r requirements.txt --cache .tmp/
	@rm -f .venv/current
	@ln -s ${venv_name} .venv/current
	@echo Success, to activate the development environment, run:
	@echo "\tsource .venv/current/bin/activate"
.PHONY: update_venv

freeze:
	python flask_app/freeze.py
.PHONY: freeze

test:
ifeq ($(second), $(word 2, $(MAKECMDGOALS)))
	python -m coverage erase
	FLASK_ENV=unittest LOGGING_LEVEL=INFO python -m pytest --doctest-modules --cov=. --cov-report= --durations=10 tests flask_api -W 'ignore::DeprecationWarning'
	@echo "#####################"
	@echo "##       OK        ##"
	@echo "#####################"
else
	FLASK_ENV=unittest LOGGING_LEVEL=INFO python -m pytest $(word 2, $(MAKECMDGOALS))  --cov=. --cov-report= --durations=10 -W 'ignore::DeprecationWarning'
endif
.PHONY: test
